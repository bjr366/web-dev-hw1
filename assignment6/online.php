<!DOCTYPE html>
<html>
<head>
    <?php include('header.php'); ?>
</head>
<body>

	<?php 
	echo "<div class='item'>";
	echo "<h1>Thank you for your purchase!</h1>";

	$name = $_POST["name"];
	echo '<p>Name: '.$name.'</p>';
	$email = $_POST["email"];
	echo '<p>Email: '.$email.'</p>';

	
	$phone = $_POST["phone"];
	
	//samsung
        if (strcmp($phone, "samsung") == 0){
	        echo '<p>Phone Selected: Samsung Galaxy Z Fold 3</p>';
        }

        // iphone
        elseif(strcmp($phone, "iphone") == 0){
	        echo '<p>Phone Selected: iPhone 13 Pro</p>';
        
	}
	
	$quantity = $_POST["quantity"];
	echo '<p>Quantity: '.$quantity.'</p>';
	

	//select price according to phone selection
	$price = 0;
	if(strcmp($phone, "iphone") == 0){
		$price = 1180;
	}
	elseif(strcmp($phone, "samsung") == 0){
		$price = 745;
	}

	echo'<p>Phone Price: $'.$price.'</p>';

	// calculate total price
	$totalprice = intval($price) * intval($quantity);
	echo'<p><b>Total Price: $'.$totalprice.'</b></p>';
	echo "</div>";
	?>
</body>
</html>
