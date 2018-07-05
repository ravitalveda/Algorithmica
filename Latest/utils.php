<?php


function Connect()
{
 $dbhost = "localhost";
 $dbuser = "deepalgorithms";
 $dbpass = "Hyderabad@123";
 $dbname = "deepalgorithms";

 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);

 return $conn;
}
 
?>