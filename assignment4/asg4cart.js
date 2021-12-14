// demo change event to compute total 

//tesla 
let obj= document.getElementById("qt");

obj.addEventListener("change", subtotal);
obj.addEventListener("change", grandTotal);

// benz
let obj2= document.getElementById("qt2");

obj2.addEventListener("change", subtotal2);
obj2.addEventListener("change", grandTotal);

let sub1 = 0;
let sub2 = 0;
let sum = 0;

// tesla
function subtotal()
{

    let price = parseInt(document.getElementById("price").value);
    // sub1 = price; // this is for the grand total
    sum+=price;

    let qt1 = parseFloat(obj.value);


    let total= qt1 * parseFloat(price);

    document.getElementById("result").textContent= "Subtotal: $" + total;
}

// benz
function subtotal2()
{

    let price2 = parseInt(document.getElementById("price2").value);
    // sub2 = price2; // this is for the grand total
    sum+=price2;

    let qt2 = parseFloat(obj2.value);


    let total= qt2 * parseFloat(price2);

    document.getElementById("result2").textContent= "Subtotal: $" + total;
}

// TODO add subtotals to get total price, then display
function grandTotal(){
    let total = document.getElementById("grandTotal");
    total.textContent = `Grand Total: $ ${sum}`; 
}

let ship= document.getElementById("shippingMethod");

ship.addEventListener("change", changeShipping);

function changeShipping(){
    var select = document.getElementById('shippingMethod');
    var value = select.options[select.selectedIndex].value;
    console.log(value);

    const shipCost = document.getElementById('shipping');
    let total = document.getElementById('grandTotal');

    // user chose shipping
    if(value == "shipping"){
        shipCost.textContent = "Shipping Cost: $1000";
        sum+=1000;
        grandTotal();
    }

    else{
        shipCost.textContent = "Shipping Cost: $0";
        sum-=1000;
        grandTotal();
    }
}

// Now for the forms

//access the first form object

let formsObj= document.forms[2];


// add an eventlistener (submit event) to the form formsObject (collecting all of the names and values for all form elements)
formsObj.addEventListener("submit", function receipt(e)
{

    // to stop form from submitting to new page (stays anchored on the same page so you can see the output)
	 e.preventDefault();


    // get how many elements in the form
    let len = formsObj.elements.length;

    let text =  "<hr><h1> Thanks for your purchase today and here is your Receipt: </h1>";


    // iterate through all of the form elements making sure there is a value entered for each element and validate zip code, and email

    for (let i=0; i < len -2; i++)
    {

        if ((formsObj.elements[i].value == "") || (formsObj.elements[i].value == null))
        {
            alert("Make sure to input " + formsObj.elements[i].name);

            // bring focus to the element that has no value
            formsObj.elements[i].focus();

            // selects the element that has no value
            formsObj.elements[i].select();

            // highlights the background with red so it brings attention to the element that's empty and requires the user to enter a value
            formsObj.elements[i].style.backgroundColor="red";

            // return so nothing would be done as user needs to enter the missing value
            return;
        }

        // if there is a value, and this is the 3rd element (zip code) then make sure it's has 5 digits (validating the zip code)
        else if ((i == 2 ) && (formsObj.elements[i].value.length != 5)  )
        {

            alert("Make sure to input the 5 digits for " + formsObj.elements[i].name);
            formsObj.elements[i].focus();
            formsObj.elements[i].select();
            formsObj.elements[i].style.backgroundColor="red";
            return;
        }


        // if there is a value, and this is the 4th element (email) then make sure it's has an '@' in the email (validating the email)
        else if ((i == 3 ) && (formsObj.elements[i].value.indexOf("@") == -1))
        {

            alert("Your email should include the '@' for this " + formsObj.elements[i].name);
            formsObj.elements[i].focus();
            formsObj.elements[i].select();
            formsObj.elements[i].style.backgroundColor="red";
            return;
        }

        // if there is a value, and this is the 4th element (email) then make sure it's has a '.' the email (validating the email)

        else if ((i == 3 ) &&  (formsObj.elements[i].value.indexOf(".") == -1))
        {

            alert("Your email should include the '.' for this " + formsObj.elements[i].name);
            formsObj.elements[i].focus();
            formsObj.elements[i].select();
            formsObj.elements[i].style.backgroundColor="red";
            return;
        }

        else 
        {
            // handle Credit Card Number separately
            if (formsObj.elements[i].name.localeCompare("Credit Card Number") == 0){
                let creditNum = formsObj.elements[i].value;
                creditNum = creditNum.substr(-4);

                text += formsObj.elements[i].name;

                text += `: `;

                text += `XXXX XXXX XXXX ${creditNum}`;

                text += `<p>`;

            }

            else{

                text += formsObj.elements[i].name;

                text += ": ";

                text += formsObj.elements[i].value;

                text += "<p>";
            }
        }

    }

    text+=`<p>Total Amount Payed: $${sum}</p>`;

    // display the output inside the element with id=receipt

    document.getElementById("receipt").innerHTML= text;

} ) ;

