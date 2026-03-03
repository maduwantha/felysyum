<?php
// Security & CORS Configuration
$allowed_origins = [
    "https://felysyum.com",
    "https://www.felysyum.com",
    "http://localhost:3000" // Allow localhost for development testing
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit();
}

// Get the raw POST data
$data = json_decode(file_get_contents("php://input"));

// 1. Basic Validation: Check if data is received
if (empty($data)) {
    http_response_code(400);
    echo json_encode(["error" => "No data received."]);
    exit();
}

// 2. Honeypot Check (Anti-Spam)
// If the hidden 'website_url' field is filled, it's a bot.
if (!empty($data->website_url)) {
    // Return success to fool the bot, but do NOT send email
    http_response_code(200);
    echo json_encode(["message" => "Email sent successfully."]);
    exit();
}

// 3. Input Validation & Sanitization
if (
    !empty($data->name) &&
    !empty($data->email) &&
    !empty($data->message)
) {
    // Sanitize inputs
    $name = strip_tags(trim($data->name));
    $email = filter_var(trim($data->email), FILTER_SANITIZE_EMAIL);
    $subjectData = isset($data->subject) ? strip_tags(trim($data->subject)) : "No Subject";
    $message = strip_tags(trim($data->message));

    // Validate Email Format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid email format."]);
        exit();
    }

    // Prevent Header Injection (newlines in headers)
    if (preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email) || preg_match("/[\r\n]/", $subjectData)) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid input detected."]);
        exit();
    }

    $to = "contact@felysyum.com";
    $email_subject = "New Contact: " . $subjectData;

    // HTML Email Content
    $body = "
    <html>
    <head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
        .header { background: #f8f9fa; padding: 10px; border-bottom: 1px solid #ddd; margin-bottom: 20px; }
        .content p { margin-bottom: 10px; }
        .label { font-weight: bold; color: #555; }
    </style>
    </head>
    <body>
    <div class='container'>
        <div class='header'>
            <h2>New Message from Felysyum Website</h2>
        </div>
        <div class='content'>
            <p><span class='label'>Name:</span> {$name}</p>
            <p><span class='label'>Email:</span> {$email}</p>
            <p><span class='label'>Subject:</span> {$subjectData}</p>
            <hr>
            <p><span class='label'>Message:</span></p>
            <p>" . nl2br($message) . "</p>
        </div>
    </div>
    </body>
    </html>
    ";

    // Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Felysyum Contact Form <contact@felysyum.com>" . "\r\n";
    $headers .= "Reply-To: {$email}" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Try to send email
    if (mail($to, $email_subject, $body, $headers, "-fcontact@felysyum.com")) {

        // Send Auto-Reply
        $autoReplySubject = "Thank you for contacting Felysyum";
        $autoReplyBody = "
        <html>
        <body style='font-family: Arial, sans-serif;'>
        <p>Hello {$name},</p>
        <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>Felysyum Team</strong></p>
        </body>
        </html>
        ";

        $autoReplyHeaders = "MIME-Version: 1.0" . "\r\n";
        $autoReplyHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $autoReplyHeaders .= "From: Felysyum Team <contact@felysyum.com>" . "\r\n";

        // Send auto-reply silently (don't fail main request if this fails)
        @mail($email, $autoReplySubject, $autoReplyBody, $autoReplyHeaders, "-fcontact@felysyum.com");

        http_response_code(200);
        echo json_encode(["message" => "Email sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to send email. Server configuration issue."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["error" => "Incomplete data. Please fill all fields."]);
}
?>