// Part 1: Style application
$("#changeStyles").click(function(){
    $("#special").css("color", "green");
    $(".highlight").css("background-color", "yellow").css("color", "black")
    let content = "";
    $(".highlight p").each(function(){
        $(this).css("color", "brown")
            .css("background-color", "white")
            .css("border", "1px solid black");
        content += $(this).html();
    });
    alert(content);
});

// Part 2: Image application
// hide
$("#hide").click(function(){
    $("#spiderman").hide();
});

// show
$("#show").click(function(){
    $("#spiderman").show();
});

// fadeOut
$("#fadeOut").click(function(){
    $("#spiderman").fadeOut("slow");
});



// Part 3: Animation Application
let big = false;
$("#animate").click(function(){
    // console.log("animating");
    // let w = $("animation").width();
    // console.log(w);

    // move left and change opacity
    $(".animation").animate({
        'left' : "300px"
    }).animate({
        opacity: '60%'
    });

    // change width and height
    if(big){
        $(".animation").animate({
            width: "200px",
            height: "200px", 
        });
        big = false;
    }
    else{
        $(".animation").animate({
            width: "400px",
            height: "400px", 
        });
        big = true;
    }
});


// Part 4: Username and Password Application

// when you change the value in input field, and you click enter, the value entered will be displayed
$("input").change(function() {

    // check to see if there is no value in the input
    if ($("input:first").val() == "")
    {
        alert("Please enter value for the username");
        $(this).focus();
        $(this).select();
        // $(this).css("background-color", "yellow");
        $("input:first").css("background-color", "yellow");
    }
    else if ($("input:last").val() == "")
    {
        alert("Please enter value for the password");
        $(this).focus();
        $(this).select();
        $("input:last").css("background-color", "yellow");
    }

    // if there is a value, then just display in the h1 tag
    else
    {
        $("#demo").text("Username: " + $("input:first").val() +
            ", Password: " + $("input:last").val());
    }

});