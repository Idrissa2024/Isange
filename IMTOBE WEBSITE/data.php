<?php
header('Content-Type: application/json');

// Call Python script
$pythonScript = 'python ../python/script.py';
$output = shell_exec($pythonScript);

// Output the data
echo json_encode($output);
?>
