<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,intitial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="receipt.css">
	<title>Receipt</title>
</head>
<body>

	<?php 
	
	$name = $_POST["name"];
	echo '<p>Name: '.$name.'</p>';
	$email = $_POST["email"];
	echo '<p>Email: '.$email.'</p>';

	
	$phone = $_POST["phone"];
	
	//samsung
        if (strcmp($phone, "samsung") == 0){
	        echo '<p> Phone Selected: Samsung Galaxy Z Fold';
        }

        // iphone
        elseif(strcmp($phone, "iphone") == 0){
	        echo '<p> Phone Selected: iPhone 13 Pro';
        
	}
	
	$quantity = $_POST["quantity"];
	echo '<p>Quantity: '.$quantity.'</p>';
	
	echo '<p>We made it here<p>';
	//select price according to phone selection
	$price = 0;
	if(strcmp($phone, "apple") == 0){
		$price = 1000;
	}
	elseif(strcmp($phone, "samsung") == 0){
		$price = 800;
	}

	echo'<p>Phone Price'.$price.'</p>';
	// // calculate total price
	// $totalprice = $price * $quantity;
	
	?>
</body>
</html>
