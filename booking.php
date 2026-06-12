<?php

$conn = mysqli_connect("localhost", "root", "", "barber_db");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$service = $_POST['service'];
$date = $_POST['date'];
$time = $_POST['time'];
$special_request = $_POST['special_request'];

$sql = "INSERT INTO booking
(name, phone_no, email, services, date, time, special_req)
VALUES
('$name', '$phone', '$email', '$service', '$date', '$time', '$special_request')";

if (mysqli_query($conn, $sql)) {
    echo "Booking Successful!";
} else {
    echo "Error: " . mysqli_error($conn);
}

?>