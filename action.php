<?php
    $words = $_POST['words-input'] . "\n";
    $f = fopen("data.txt", "a+");
    fwrite($f, $words); 
    fclose($f);
?>
