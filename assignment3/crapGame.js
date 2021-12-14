/* js_diceGame.js */
function play(sum){
    let bet = document.getElementById("bet").value;
    let outcome = document.getElementById("result");
    if (sum==7 || sum==11){
        win = 1;
        result.textContent = `You Won!!!!!`;
    }
    else if(sum==2 || sum==3 || sum==12){
        win = 0;
        result.textContent = `You Lost ${bet}!`;
    }
    else{
        result.textContent = `You get another Try!`;
    }
}

function rollIt() {

    // rolling each die randomelly 

    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;

    // sum of rolling 2 dice
    var total = die1 + die2;
    play(total);
    // accessing the first form element
    document.forms[0].elements[1].value = die1;

   // accessing the 1st form element using the forms[] and elements[] DOM's arrays
    document.forms[0].elements[2].value= die2;

    // accessing the 3rd form element using the forms[] and elements[] DOM's arrays
    document.forms[0].elements[3].value = total;
        
     // change the 4th image src loaded in the document using the images[]
     document.images[0].src="dice_" + die1+ ".gif";

    // change the 5th image src loaded in the document using the images[]
     document.images[1].src="dice_" + die2 + ".gif";
 }

