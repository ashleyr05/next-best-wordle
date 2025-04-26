<?php
// Allow Cross-Origin Scripting so that we can develop
// on our local Docker environments
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Read input from the body of the request
// (i.e., from STDIN) as JSON
$json = file_get_contents("php://input");
$input = json_decode($json, true);

// Do processing of the data

$output = [
    "time" => date("Y-m-d g:i a"),
    "request" => $input
];

//get words file
$words = file_get_contents("https://cs4640.cs.virginia.edu/homework/angularwords.txt");
$words_array = explode("\n", $words);

//get random word from word array
$output["target word"] = array_rand($words_array);

// Output back to the client as JSON
header("Content-Type: application/json");
echo json_encode($output, JSON_PRETTY_PRINT);
