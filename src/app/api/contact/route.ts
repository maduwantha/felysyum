import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


function escapeHtml(text: string) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message, website_url } = body;

        // Honeypot Check (Anti-Spam)
        if (website_url) {
            // Return success to fool the bot, but do NOT send email
            return NextResponse.json({ message: 'Success' }, { status: 200 });
        }

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
        }


        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });


        const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

        const mailOptions = {
            from: `"Felysyum Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            replyTo: email,
            subject: `New Contact: ${name} - ${subject || 'No Subject'}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
                    <h2 style="color: #007bff;">New Message Received</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
                        ${safeMessage}
                    </div>
                </div>
            `,
        };

        //  Send Emails
        await transporter.sendMail(mailOptions);

        transporter.sendMail({
            from: `"Felysyum Team" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Thank you for contacting Felysyum',
            html: `<h3>Hi ${name},</h3><p>We received your message and will get back to you soon.</p>`
        }).catch(err => console.error('Auto-reply failed:', err));

        return NextResponse.json({ message: 'Success' }, { status: 200 });

    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}