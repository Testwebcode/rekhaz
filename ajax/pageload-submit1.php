<?php
require 'path/to/mailaction.php'; // Update the path to mailaction.php

// Check if the request is a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming your form has fields named 'fname', 'email', 'phone', 'usage', 'looking'

    $fname = $_POST["fname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $usage = $_POST["usage"];
    $looking = $_POST["looking"];

    // Additional validation or processing as needed

    // Example: Send an email
    $subject = "New Pageload Form Submission";
    $message = "Name: $fname\nEmail: $email\nPhone: $phone\nUsage: $usage\nLooking: $looking";

    // Call the sendEmail function from mailaction.php
    if (sendEmail($subject, $message)) {
        // Return a JSON response for success (adjust as needed)
        echo json_encode(["status" => "success", "message" => "Form submitted successfully"]);
    } else {
        // Return a JSON response for email sending failure (adjust as needed)
        echo json_encode(["status" => "error", "message" => "Failed to send email"]);
    }
} else {
    // Return an error response for non-POST requests
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>