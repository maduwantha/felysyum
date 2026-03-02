const nodemailer = require('nodemailer');

async function verifySMTP() {
    console.log('Starting SMTP Connection Test...');

    const transporter = nodemailer.createTransport({
        host: 'mail.felysyum.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'contact@felysyum.com',
            pass: '=QR+[_,!9aEz874d',
        },
        // logger: true, // Log to console
        // debug: true   // Include SMTP traffic in the logs
        connectionTimeout: 10000, // 10 seconds
        greetingTimeout: 10000,
        socketTimeout: 10000
    });

    try {
        console.log('Attempting to verify transporter...');
        await transporter.verify();
        console.log('✅ SMTP Connection Successful!');

        // Try sending a test email
        console.log('Attempting to send test email...');
        const info = await transporter.sendMail({
            from: '"SMTP Test" <contact@felysyum.com>',
            to: 'contact@felysyum.com', // Send to self
            subject: 'SMTP Test successful',
            text: 'This is a test email from the test-smtp.js script.'
        });
        console.log('✅ Test email sent:', info.messageId);

    } catch (error) {
        console.error('❌ SMTP Connection Failed:', error);
    }
}

verifySMTP();
