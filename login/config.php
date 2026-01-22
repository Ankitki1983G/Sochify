<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


$host = "localhost";
$user = "root";
$pass = "Ankit@2007";
$db = "user_data";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed']);
    exit;
}
?>