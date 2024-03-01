<?php
require 'path/to/mailaction.php';

// Check if the request is a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming your form has fields named 'fname', 'email', 'phone', 'usage', 'looking'
    $fname = $_POST["fname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $usage = $_POST["usage"];
    $looking = $_POST["looking"];

    // Perform additional validation or processing as needed

    // Example: Send an email using mailaction.php
    $subject = "New Contact Form Submission";
    $message = "Name: $fname\nEmail: $email\nPhone: $phone\nUsage: $usage\nLooking: $looking";

    if (sendEmail($subject, $message)) {
        // Return a JSON response for a successful form submission
        echo json_encode(["status" => "success", "message" => "Form submitted successfully"]);
    } else {
        // Return a JSON response for a failed email sending
        echo json_encode(["status" => "error", "message" => "Failed to send email"]);
    }
} else {
    // Return an error response for non-POST requests
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>