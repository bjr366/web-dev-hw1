// demo content change


function update()
{
    const fortunes = 
        ["Good things come to those who wait.", 
        "The best gift is the one you give to others.", 
        "Treat others how you want to be treated.", 
        "Your greatest enemy is yourself.", 
        "You miss one hundred of the chances you don't take in life."];
    
    const images = ["images/mountains.jpeg", "images/timesquare.jpeg", "images/pinkmoon.jpeg",
        "images/raindrops.jpeg", "images/rickmorty.jpg"];
    
    
    let select = Math.floor(Math.random() * 5); 
    let fortune = document.getElementById("message");
    let result = fortunes[select];
    fortune.textContent = `${result}`;


    document.body.style.background = `url(${images[select]}) no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";

}


update()