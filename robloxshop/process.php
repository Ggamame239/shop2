<?php
include "connect.php";

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password']; // << ไม่เข้ารหัสแล้ว

$stmt = $conn->prepare("INSERT INTO Users (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $email, $password);

if ($stmt->execute()) {
  echo "✅ สมัครสมาชิกสำเร็จ!";
} else {
  echo "❌ เกิดข้อผิดพลาด: " . $conn->error;
}
?>

