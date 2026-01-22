<?php
header('Content-Type: application/json');
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (empty($email) || empty($password)) {
        echo json_encode(['status' => 'error', 'message' => 'All fields are required']);
        exit;
    }

    $stmt = $conn->prepare("SELECT id,name,password FROM users WHERE email=?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $name, $db_password);

    if ($stmt->num_rows === 0) {
        echo json_encode(['status' => 'error', 'message' => 'User not found. Signup first']);
        exit;
    }

    $stmt->fetch();

    if (password_verify($password, $db_password)) {
        echo json_encode(['status' => 'success', 'message' => '✅ Login successful! Welcome.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Incorrect password']);
    }


    $stmt->close();
    $conn->close();
}
?>