

<?php

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  // Get form data
  $name = $_POST["name"];
  $email = $_POST["email"];// Validate form data
  if (empty($name)) {
    $error = "Name is required";
  } elseif (empty($email)) {
    $error = "Email is required";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $error = "Invalid email format";
  } else {
    // If form data is valid, process it
    // Here you can do anything you want with the form data, such as sending an email or storing it in a database
    // For this example, we'll just display a message with the form data
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email;
    exit;
  }
}
  ?>