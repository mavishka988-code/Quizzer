<?php
header('Content-Type: application/json');
require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
if (!$data || !isset($data['firstName']) || !isset($data['emailAddress']) || !isset($data['message'])) {
    echo json_encode(['success' => false, 'message' => 'Missing required fields.']);
    exit;
}

try {
    $stmt = $pdo->prepare('INSERT INTO contacts (first_name, last_name, email, address, country, message) VALUES (?, ?, ?, ?, ?, ?)');
    $stmt->execute([
        $data['firstName'], 
        $data['lastName'] ?? '', 
        $data['emailAddress'], 
        $data['address'] ?? '', 
        $data['country'] ?? '', 
        $data['message']
    ]);
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Failed to send message.']);
}
?>
