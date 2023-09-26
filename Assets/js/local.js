// Creating global variables targeting the input
var cityEl = document.getElementById('city-input');
// country input 
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
    // this will prevent DOM from refreshing
    e.preventDefault()
    var city = cityEl.value.trim()
    var country = countryEl.value.trim()
    //creating object
    // putting value together under one object 
    var travelSearch = {  
        city:city, 
        country:country
    }
    // Check if the search already exists in the array 
    var exists = searchArr.some(item => item.city === city && item.country === country);

    if (!exists) {
        var travelSearch = {
            city: city,
            country: country
        };
    }
    //pushing an object into an array
    // this will create a list of objects 
    // this happens when there is more than one 
    // (lightbulb!) when there is a "".method" read code right to left 
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



function getSavedData() {
// Rettrieving data from local storage
var localStorageData = localStorage.getItem("hotel");
// Redefine as an array using parse 
var dataArray = JSON.parse(localStorageData);
// now the array data can be utilized in a loop. 
var displayData = document.getElementById("displaySaved");
// Loop thrpuhg the data array and display each item 
dataArray.forEach(item => {
    console.log (item)
    displayDataOnPage(item, displayData);
});

}

// This function will display the saved data on the page 
function displayDataOnPage(item) {
    //Get the element where you want to display the data by its designated ID
    var dataDisplay = document.getElementById("displaySaved");
    //Create a new paragraph element to hold the data 
    var newItem = document.createElement("p");
    // Set the text content of the paragraph to display the city and country 
    newItem.textContent = "City: " + item.city + ", Country: " + item.country;
    // Append the new paragraph to the dataDisplay element, adding it to the page.
    dataDisplay.appendChild(newItem);
}

// Call the getSavedData function to retrieve and display the data 
getSavedData();




