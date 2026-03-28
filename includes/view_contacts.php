<?php
require_once 'db.php';

try {
    $stmt = $pdo->query('SELECT * FROM contacts ORDER BY created_at DESC');
    $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    die("Database Error: " . $e->getMessage());
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Contact Submissions</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-5">
    <h2 class="mb-4">Contact Form Submissions</h2>
    
    <?php if (count($contacts) > 0): ?>
    <table class="table table-bordered table-striped">
        <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Country</th>
                <th>Message</th>
                <th>Date Submitted</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($contacts as $c): ?>
            <tr>
                <td><?= htmlspecialchars($c['id']) ?></td>
                <td><?= htmlspecialchars($c['first_name']) ?></td>
                <td><?= htmlspecialchars($c['last_name']) ?></td>
                <td><?= htmlspecialchars($c['email']) ?></td>
                <td><?= htmlspecialchars($c['address']) ?></td>
                <td><?= htmlspecialchars($c['country']) ?></td>
                <td><?= nl2br(htmlspecialchars($c['message'])) ?></td>
                <td><?= htmlspecialchars($c['created_at']) ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <?php else: ?>
        <div class="alert alert-info">No contact messages found in the database. Submit a form to see it here!</div>
    <?php endif; ?>
</body>
</html>
