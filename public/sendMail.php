<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = trim(strip_tags($data['name'] ?? ''));
$name = str_replace(["\r", "\n"], ' ', $name);
$email = trim($data['email'] ?? '');
$message = trim(strip_tags($data['message'] ?? ''));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

$recipient = 'sebastian.buchholz98@gmail.com';
$subject = '=?UTF-8?B?' . base64_encode('Kontaktanfrage von ' . $name) . '?=';
$body = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";

$headers = "From: noreply@DEINE-DOMAIN.de\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

$sent = mail($recipient, $subject, $body, $headers);

http_response_code($sent ? 200 : 500);
echo json_encode(['success' => $sent]);