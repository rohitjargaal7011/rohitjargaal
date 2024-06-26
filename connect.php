<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

// Create connection
$conn = new mysqli($servername, 
	$username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
	die("Connection failed");
}

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$docpdf = $_POST['docpdf'];
$sql = "INSERT INTO `queryform` (`Fullname`, `Email`, `Comment`,'Docpdf') VALUES ('$fullname', '$email', '$comment', '$docpdf')";
if($conn->query($sql)==true){
    echo "new record add";
}
else{
    echo "error";
}
$conn->close();
?>