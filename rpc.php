<?php
/**
 * rpc.php — Polygon RPC Proxy
 * Upload this file to your PHP server root (same domain as your site)
 * e.g. https://yourdomain.com/rpc.php
 *
 * This proxies Polygon blockchain RPC calls server-side,
 * completely eliminating CORS errors in the browser.
 */

// ── Allow requests from your own domain only ──────────────────────────────
// Replace with your actual domain, or use * to allow all origins
$allowed_origin = "*"; // Change to "https://yourdomain.com" for production security

header("Access-Control-Allow-Origin: $allowed_origin");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request (browsers send this before POST)
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// ── Polygon RPC endpoints — tried in order until one works ────────────────
$rpc_urls = [
    "https://polygon-bor-rpc.publicnode.com",
    "https://1rpc.io/matic",
    "https://polygon.meowrpc.com",
    "https://polygon.drpc.org",
    "https://rpc.ankr.com/polygon",
];

// Read the raw JSON body sent by ethers.js
$body = file_get_contents("php://input");

if (empty($body)) {
    http_response_code(400);
    echo json_encode(["error" => "Empty request body"]);
    exit;
}

// ── Try each RPC endpoint until one succeeds ──────────────────────────────
$last_error = "All RPC endpoints failed";

foreach ($rpc_urls as $url) {
    $ch = curl_init($url);

    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $body,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 8,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_HTTPHEADER => [
            "Content-Type: application/json",
            "Content-Length: " . strlen($body),
        ],
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_FOLLOWLOCATION => false,
    ]);

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curl_error = curl_error($ch);
    curl_close($ch);

    // Success — return the RPC response directly to the browser
    if ($response !== false && $http_code === 200) {
        echo $response;
        exit;
    }

    // Log failure and try next endpoint
    $last_error = $curl_error ?: "HTTP $http_code from $url";
}

// All endpoints failed
http_response_code(502);
echo json_encode(["error" => $last_error]);
exit;