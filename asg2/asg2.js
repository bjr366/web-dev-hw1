function change(){
    // change the background img
    document.body.style.backgroundImage= "url('images/sunshine.jpeg')";
    
    // get the nav bar and button section
    let objQuestions = document.getElementsByClassName("questions");
    let objNav = document.getElementsByClassName("nav-item");

    // change the theme of page
    for (let i = 0; i < objQuestions.length; i++) {
        objQuestions[i].style.background = "#e1cec7";
        objQuestions[i].style.color = "#000000";
    }

    for (let j = 0; j < 6; j++) {
        objNav[j].style.background = "#f2c09f";
        objNav[j].style.color = "#000000";
        objNav[j].style.opacity = "0.7";
    }
}

function randPrize(){
    const prizes = ["iPad Pro", "Tesla Model 3", "Chicago Air Jordan 1", 
        "Galaxy Z Fold3", "Mercedes Benz EQS"];
    let select = Math.floor(Math.random() * 5);
    let output = document.getElementById("prize");
    let result = prizes[select];
    output.textContent = `Congratulations! You won a ${result}!`;
}

function swapT(){
    let objP1 = document.getElementById("p1");
    let objP2 = document.getElementById("p2");
    let text1 = objP1.textContent;
    let text2 = objP2.textContent;
    objP1.textContent = text2;
    objP2.textContent = text1;
}

function swapImg(){
    let objImg1 = document.getElementById("img1");
    let objImg2 = document.getElementById("img2");
    let image1 = objImg1.src;
    let image2 = objImg2.src;
    objImg1.src = image2;
    objImg2.src = image1;
}

// doSomething1();

// function doSomething1() {
//     console.log('doSomething1');
//     console.log([...[...[1, 2, 3] ] ].length);
//     console.log(( async ( ) => 'hello' )( ));
//     console.log(( x => true )( ));
//     console.log([ 4, 5, 6, ...[ 10, 11, 12 ] ]);
//     console.log(( ( y, x ) => ( x ) ? x : y )( true, false ));
// }

// const doSomething2 = function() {
//     console.log('doSomething2');
// }

// const doSomething3 = () => {
//     console.log('doSomething3');
// }

// const doSomething4 = () => console.log('doSomething4');

// const doSomething5 = new Function("console.log('doSomething5');");

// doSomething2();
// doSomething3();
// doSomething4();
// doSomething5();
