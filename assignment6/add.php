<html>
<body>
    <?php 
    $var1 = $_POST["num1"]; 
    $num1 = floatval($var1);

    $var2 = $_POST["num2"]; 
    $num2 = floatval($var2);

    $op = $_POST["operation"];

    $result = 0;
    if (strcmp($op, "+") == 0){
        $result = $num1 + $num2;
        echo "$num1 + $num2 = $result";
    }
    elseif (strcmp($op, "-") == 0){
        $result = $num1 - $num2;
        echo "$num1 - $num2 = $result";
    }
    elseif (strcmp($op, "*") == 0){
        $result = $num1 * $num2;
        echo "$num1 * $num2 = $result";
    }
    elseif (strcmp($op, "/") == 0){
        $result = $num1 / $num2;
        echo "$num1 / $num2 = $result";
    }
    ?>
</body>
</html>