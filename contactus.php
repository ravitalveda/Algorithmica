<?php

require 'utils.php';

$postdata = file_get_contents("php://input");

echo $postdata;
echo "========";
$request = json_decode($postdata);

echo $request->contactname;
echo "========";

$conn      = Connect();
$contactname = $conn->real_escape_string($request->contactname);
$contactemail  = $conn->real_escape_string($request->contactemail);
$contactnumber     = $conn->real_escape_string($request->contactnumber);
$contactmessage   = $conn->real_escape_string($request->contactmessage);
$query   = "INSERT into contactus (contactname,contactemail,contactnumber,contactmessage) VALUES('" . $contactname. "','" . $contactemail. "','" . $contactnumber. "','" . $contactmessage. "')";

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
$subject = 'Deepalgorithms - Contact US';
$contactmessage = "From: $contactname $contactemail \r\n\r\nMessage: \r\n".$contactmessage;
$headers = 'From: '.$contactemail."\r\n" .
    'Reply-To: '.$contactemail . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $contactmessage, $headers);

?>

