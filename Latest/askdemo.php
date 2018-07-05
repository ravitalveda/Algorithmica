<?php

require 'utils.php';

$postdata = file_get_contents("php://input");

echo $postdata;
echo "========";
$request = json_decode($postdata);

echo $request->firstname;
echo "========";

$conn      = Connect();
$firstname = $conn->real_escape_string($request->firstname);
$lastname  = $conn->real_escape_string($request->lastname);
$email     = $conn->real_escape_string($request->email);
$company   = $conn->real_escape_string($request->company);
$message   = $conn->real_escape_string($request->message);
$query   = "INSERT into askfordemo (firstname,lastname,email,company,message) VALUES('" . $firstname. "','" . $lastname. "','" . $email. "','" . $company. "','" . $message. "')";

echo $query;
echo "\n<br/>\n";

$success = $conn->query($query);

if (!$success) {
    die("Couldn't enter data: ".$conn->error);
}

echo "Thank You For Contacting Us";

$conn->close();

/* Send a mail to admin email */
$to      = 'jpmishra.84@gmail.com';
$subject = 'Deepalgorithms - Ask Demo';
$message = "From: $firstname $lastname \r\n\r\nMessage: \r\n".$message;
$headers = 'From: '.$email."\r\n" .
    'Reply-To: '.$email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

?>