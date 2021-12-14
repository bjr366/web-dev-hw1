// ADDING ITEMS TO START AND END OF LIST

let obj = document.querySelector("#bt1");
obj.addEventListener("click", addNode);


function addNode() 
{

  // Get the <ul> element (first ul element)
  let list = document.getElementsByTagName('ul')[0];         


  // ADD NEW element 
  var newItemLast = document.createElement('li'); 

  var a = document.createElement('a');
  a.href = 'newNodes.html';
  a.innerText = 'New Nodes';

  newItemLast.appendChild(a);

   // Add element to the end of the list                     
  list.appendChild(newItemLast);                           

  // ADD NEW ITEM START OF LIST

  // Create element
  let newItemFirst = document.createElement('li'); 

  // create anchor
  var a2 = document.createElement('a');
  a2.href = '../index.html';
  a2.innerText = 'Home';

  newItemFirst.appendChild(a2);

  // Add element to list (as a first child in the list- start of the list)                     
  list.insertBefore(newItemFirst, list.firstChild);                 


// change all styles of the old elements from the 2nd to the one before last
// querySelectorAll('li') selects all elements of li (an array collection)

  let listItems = document.querySelectorAll('li');                   

  // ADD A CLASS OF COOL TO ALL LIST ITEMS
  let i;                                                            
  
  // Loop through collection elements 
  for (i = 1; i < listItems.length -1; i++) {                           
  
    // Change class to cool
    listItems[i].className = 'cool';                                 
  
  }

  // ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

  // select the first h2 in the document
  let heading = document.querySelector('h2');                        

  // get h2 text
  let headingText = heading.firstChild.nodeValue;

  // get the number of <li> elements in the documents                  
  let totalItems = listItems.length; 

  let newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content


  // Update h2 text and html content by using innerHTML (not textContent) because it contains HTML markup
  heading.innerHTML = newHeading;                                    

}