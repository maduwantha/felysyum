import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message, subject } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Create Transporter
        const transporter = nodemailer.createTransport({
            host: 'mail.felysyum.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'contact@felysyum.com',
                pass: 'wFO,;zrLxi.;128-er',
            },
        });

        // Email to Admin/Support
        const mailOptions = {
            from: '"Felysyum Contact Form" <contact@felysyum.com>',
            to: 'contact@felysyum.com',
            replyTo: email,
            subject: `New Contact Form Message from ${name}: ${subject || 'No Subject'}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='UTF-8'>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                .header { border-bottom: 2px solid #007bff; padding-bottom: 20px; margin-bottom: 30px; }
                .header h1 { color: #007bff; margin: 0; font-size: 24px; }
                .content { margin-bottom: 30px; }
                .field { margin-bottom: 15px; padding: 15px; background: #f8f9fa; border-radius: 5px; }
                .field strong { color: #495057; display: inline-block; width: 100px; }
                .message-box { background: #ffffff; border: 1px solid #dee2e6; padding: 20px; border-radius: 5px; margin-top: 15px; }
                .footer { border-top: 1px solid #dee2e6; padding-top: 20px; color: #6c757d; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>New Contact Message</h1>
                    <p>Someone contacted Felysyum through the website</p>
                </div>
                
                <div class='content'>
                    <div class='field'>
                        <strong>Name:</strong> ${name}
                    </div>
                    <div class='field'>
                        <strong>Email:</strong> <a href='mailto:${email}'>${email}</a>
                    </div>
                    <div class='field'>
                         <strong>Subject:</strong> ${subject || 'N/A'}
                    </div>
                    <div class='field'>
                        <strong>Date:</strong> ${new Date().toLocaleString()}
                    </div>
                    
                    <div class='field'>
                        <strong>Message:</strong>
                        <div class='message-box'>${message.replace(/\n/g, '<br>')}</div>
                    </div>
                </div>
                
                <div class='footer'>
                    <p>This message was sent from the contact form at felysyum.com</p>
                    <p>Reply directly to: ${email}</p>
                </div>
            </div>
        </body>
        </html>
      `,
        };

        // Auto-Reply Email to User
        const autoReplyOptions = {
            from: '"Felysyum Team" <contact@felysyum.com>',
            to: email,
            replyTo: 'contact@felysyum.com',
            subject: 'Thank you for contacting Felysyum',
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset='UTF-8'>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 20px; }
                    .container { max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                    .header { border-bottom: 2px solid #333333; padding-bottom: 20px; margin-bottom: 30px; }
                    .header h1 { color: #333333; margin: 0; font-size: 24px; }
                    .header p { color: #333333; }
                    .content { margin-bottom: 30px; }
                    .content p { color: #333333; }
                    .info-box { background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
                    .info-box p { color: #333333; }
                    .footer { border-top: 1px solid #dee2e6; padding-top: 20px; color: #333333; text-align: center; }
                    .footer p { color: #333333; }
                    .signature { margin-top: 20px; }
                    .signature p { color: #333333; }
                    ul li { color: #333333; }
                    a { color: #007bff; text-decoration: none; }
                    a:hover { text-decoration: underline; }
                </style>
            </head>
            <body>
                <div class='container'>
                    <div class='header'>
                        <h1>Thank You!</h1>
                        <p>Your message has been received</p>
                    </div>
                    
                    <div class='content'>
                        <p>Hello ${name},</p>
                        
                        <p>Thank you for contacting Felysyum. We have received your message and will respond within 24-48 hours.</p>
                        
                        <div class='info-box'>
                            <p><strong>Message received:</strong> ${new Date().toLocaleString()}</p>
                            <p><strong>We will reply to:</strong> ${email}</p>
                        </div>
                        
                        <p>If you have urgent questions, you can contact us at:</p>
                        <ul>
                            <li>Email: contact@felysyum.com</li>
                            <li>Telegram: <a href='https://t.me/felysyum'>@felysyum</a></li>
                        </ul>
                        
                        <div class='signature'>
                            <p>Best regards,<br>
                            <strong>Felysyum Team</strong></p>
                        </div>
                    </div>
                    
                    <div class='footer'>
                        <p><a href='https://felysyum.com'>felysyum.com</a></p>
                        <p><small>This is an automated response. Please do not reply to this email.</small></p>
                    </div>
                </div>
            </body>
            </html>
        `
        };


        // Send email
        await transporter.sendMail(mailOptions);

        // Send auto-reply (don't block on this failing)
        try {
            await transporter.sendMail(autoReplyOptions);
        } catch (error) {
            console.error('Auto-reply failed:', error);
        }

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
