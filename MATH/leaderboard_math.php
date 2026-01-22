<?php
error_reporting(0);
ini_set('display_errors', 0);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');


$host = "localhost";
$user = "root";
$pass = "Ankit@2007";
$db = "quizdb";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

// POST request - save score
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $name = $data['name'] ?? '';
    $score = $data['score'] ?? 0;

    if ($name && is_numeric($score)) {
        $stmt = $conn->prepare("INSERT INTO leaderboard (name, score) VALUES (?, ?)");
        $stmt->bind_param("si", $name, $score);
        $stmt->execute();
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["error" => "Invalid data"]);
    }
    exit;
}

// GET request - fetch top 10 scores
$result = $conn->query("SELECT name, score FROM leaderboard ORDER BY score DESC LIMIT 10");
$lb = [];
while ($row = $result->fetch_assoc()) {
    $lb[] = $row;
}
echo json_encode($lb);
?>