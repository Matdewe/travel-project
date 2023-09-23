// Creating global variables targeting the input
// City Input 
var cityEl = document.getElementById('city-input');
// Country input 
var countryEl = document.getElementById("country-input");
// button 
var submitBtn = document.getElementById("submitBtn");
// Creating event listener 
submitBtn.addEventListener("click", saveToStorage); 

var searchArr =[]
//validate the input and send to local storage
function saveToStorage(e) {
    if (!cityEl.value && !countryEl.value) {
        return;
    }
    // due to there being a button 
    // prevents DOM from refreshing
    e.preventDefault()
    var city = cityEl.value.trim()
    var country = countryEl.value.trim()
    //creating object
    // putting value together uder one object 
    var travelSearch = {  
        city:city, 
        country:country
    }
    //pushing an object into an array
    // this will create a list of objects 
    // this happens when there is more than one 
    // when there is a "".method" read code right to left 
    searchArr.push(travelSearch)
    console.log(searchArr)
    localStorage.setItem("hotel", JSON.stringify(searchArr))
    // Next function 
    //Pull info from local storage 
    // function
    getSavedData()
}

// get local storage data, data type is an array therefore have to use a for loop to process,
// in the logic of the for loop i am solving for one display at a time. 
// 

function getSavedData() {

}

// 1. get local storage 
// 2. redefine as an array - can now be used in for loop
// 3. display it - (look through it) - for loop ( make sure to console.log)
// How to display from js to html - resource. 