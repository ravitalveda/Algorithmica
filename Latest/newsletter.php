<?php

require 'utils.php';

$postdata = file_get_contents("php://input");

echo $postdata;
echo "========";
$request = json_decode($postdata);

echo $request->subscribeemail;
echo "========";

$conn      = Connect();
$subscribeemail = $conn->real_escape_string($request->subscribeemail);
$query   = "INSERT into newsletter (subscribeemail) VALUES('" . $subscribeemail. "')";

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
$subject = 'Deepalgorithms - SubscribeUS';
$headers = 'From: '.$contactemail."\r\n" .
    'Reply-To: '.$contactemail . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $subscribeemail, $headers);

?>

