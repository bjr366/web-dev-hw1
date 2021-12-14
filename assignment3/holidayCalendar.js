// simple calendar application

// IMPORTANT: NYU Holidays link on assignment 3 instruction doesn't work.
// I used the following link to find NYU holiday schedule ...
// https://www.nyu.edu/employees/hr-at-your-service/manager-s-toolkit/managing-employees/managing-time-off.html
// array for holday dates from September 1, 2021 to August 31, 2021
const holidayDates = [new Date("2021/9/03"), new Date("2021/9/06"), new Date("2021/11/24"),
new Date("2021/11/25"), new Date("2021/11/26"), new Date("2021/12/23"),
new Date("2021/12/24"), new Date("2021/12/27"), new Date("2021/12/28"),
new Date("2021/12/29"), new Date("2021/12/30"), new Date("2021/12/31"),
new Date("2022/1/03"), new Date("2022/1/14"), new Date("2022/1/17"),
new Date("2022/2/18"), new Date("2022/2/21"), new Date("2022/5/27"),
new Date("2022/5/30"), new Date("2022/6/17"), new Date("2022/6/20"),
new Date("2022/7/1"), new Date("2022/7/4")];

// array for the holiday names
const holidayNames = ["Labor Day", "Labor Day", "Thanksgiving Recess",
"Thanksgiving Recess", "Thanksgiving Recess", "Winter Recess",
"Winter Recess", "Winter Recess", "Winter Recess",
"Winter Recess", "Winter Recess", "Winter Recess",
"Winter Recess", "Martin Luther King, Jr. Day", "Martin Luther King, Jr. Day",
"Presidents' Day", "Presidents' Day", "Memorial Day",
"Memorial Day", "Juneteenth", "Juneteenth",
"Independence Day", "Independence Day"];

// array for holiday images
const holidayImages = ["images/laborDay.png", "images/laborDay.png", "images/thanksgiving.jpeg",
"images/thanksgiving.jpeg", "images/thanksgiving.jpeg", "images/winterRecess.jpeg",
"images/winterRecess.jpeg", "images/winterRecess.jpeg", "images/winterRecess.jpeg",
"images/winterRecess.jpeg", "images/winterRecess.jpeg", "images/winterRecess.jpeg",
"images/winterRecess.jpeg", "images/mlkDay.jpeg", "images/mlkDay.jpeg",
"images/presidentsDay.jpeg", "images/presidentsDay.jpeg", "images/memorialDay.jpeg",
"images/memorialDay.jpeg", "images/memorialDay.jpeg", "images/juneteenth.jpeg",
"images/independenceDay.jpeg", "images/independenceDay.jpeg"];


const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];


// displays wether or not date is a holiday
function display(){
    // had problem: dates were being read as one day early
    // we replace '-' by '/' to give accurate day
    let current = document.getElementById('date').value.replace(/-/g, '\/');
    let search = new Date(current);

    // full name of date
    let dateString = monthNames[search.getUTCMonth()] + " " + 
    search.getUTCDate() + ", " + search.getUTCFullYear();

    // check for holidays and return index
    found = holidayDates.map(Number).indexOf(+search);

    let result; // message that will be displayed
    let source; // image that will be displayed
    console.log("dateString: " + dateString);
    
    // date is not a holiday
    if(found == -1){
        result = dateString + " is not an NYU Holiday";
        source = "images/schoolDay.jpeg";
    }
    // date is a holiday
    else{
        result = dateString + " is " + holidayNames[found];
        source = holidayImages[found];
    }

    let message = document.getElementById('message');
    message.textContent = result;

    let image = document.getElementById('image');
    image.innerHTML = `<img src=\"${source}\" width=\"70%\" height=\"auto\">`

}

// ---------------------------------------------------------------
// call function
// let btn = document.getElementById('result');
// btn.addEventListener('click', display());


