<?php
// Allow Cross-Origin Scripting so that we can develop
// on our local Docker environments
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

//get words file
$words = file("https://cs4640.cs.virginia.edu/homework/angularwords.txt", FILE_IGNORE_NEW_LINES);

//get random word from word array
$output["target word"] = $words[array_rand($words)];

// Output back to the client as JSON
header("Content-Type: application/json");
echo json_encode($output, JSON_PRETTY_PRINT);
