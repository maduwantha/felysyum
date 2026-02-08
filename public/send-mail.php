<?php
// Set headers to handle cross-origin requests (CORS) and JSON content
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get the raw POST data
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->name) && !empty($data->email) && !empty($data->message)) {

    $name = strip_tags($data->name);
    $email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
    $subjectData = strip_tags($data->subject);
    $message = strip_tags($data->message);

    $to = "contact@felysyum.com";
    $subject = "New Contact: " . ($subjectData ? $subjectData : "No Subject");

    // HTML Email Content
    $body = "
    <html>
    <head>
    <title>New Contact Message</title>
    </head>
    <body>
    <h2>New Message from Felysyum Website</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Subject:</strong> {$subjectData}</p>
    <p><strong>Message:</strong><br>{$message}</p>
    </body>
    </html>
    ";

    // Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Felysyum Website <contact@felysyum.com>" . "\r\n";
    $headers .= "Reply-To: {$email}" . "\r\n";

    // Try to send email
    if (mail($to, $subject, $body, $headers, "-fcontact@felysyum.com")) {

        // Send Auto-Reply
        $autoReplySubject = "Thank you for contacting Felysyum";
        $autoReplyBody = "
        <html>
        <head><title>Thank You</title></head>
        <body>
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
        $autoReplyHeaders .= "Reply-To: contact@felysyum.com" . "\r\n";

        mail($email, $autoReplySubject, $autoReplyBody, $autoReplyHeaders, "-fcontact@felysyum.com");

        http_response_code(200);
        echo json_encode(array("message" => "Email sent successfully."));
    } else {
        http_response_code(500);
        echo json_encode(array("error" => "Failed to send email. Server configuration issue."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("error" => "Incomplete data. Please fill all fields."));
}
?>