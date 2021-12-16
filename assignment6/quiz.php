<!DOCTYPE html>
<html>
<head>
    <?php include('header.php'); ?>
</head>
<body>

	<?php 
	echo "<div class='item'>";
	echo "<h1>Quiz Results</h1>";

    //q1
    echo "<h3>Question 1</h3>";
	$rainbow = $_POST["rainbow"];
	echo '<p>Your Answer: '.$rainbow.'. ';
    
    if (strcmp($rainbow, "pink") == 0){
        echo '<b>CORRECT!</b>';
    }
    else{
        echo '<b>Wrong, Correct Answer is pink</b></p>';
    }
	
    

	//q2
    echo "<h3>Question 2</h3>";
    $eyecolor = $_POST["eyecolor"];
	echo '<p>Your Answer: '.$eyecolor.'. ';
    
    if (strcmp($eyecolor, "brown") == 0){
        echo '<b>CORRECT!</b>';
    }
    else{
        echo '<b>Wrong, Correct Answer is brown</b></p>';
    }

    //q3
    echo "<h3>Question 3</h3>";
    $years = $_POST["years"];
	echo '<p>Your Answer: '.$years.'. ';

    if (strcmp($years, "four") == 0){
        echo '<b>CORRECT!</b>';
    }
    else{
        echo '<b>Wrong, Correct Answer is four</b></p>';
    }

	echo "</div>";
	?>
</body>
</html>