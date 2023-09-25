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
// 


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

getSavedData();
// 1. get local storage 
// 2. redefine as an array - can now be used in loop
// 3. display it - (look through it) - for loop ( make sure to console.log)
// How to display from js to html - resource. 


function displayDataOnPage(item) {
    var dataDisplay = document.getElementById("displaySaved");
    var newItem = document.createElement("p");
    newItem.textContent = "City: " + item.city + ", Country: " + item.country;
    dataDisplay.appendChild(newItem);
}

// Call the getSavedData function to retrieve and display the data 
getSavedData();


/*function updateSuggestions(inputElement, citySuggestionBox) {
    // Convert user input to lowercase for case-insensitive matching
    var searchString = inputElement.value.toLowerCase();

    // Iterate through the data array to find marching suggestions
    dataArray.forEach(item => {
        // Convert city and country names to lowercase for comparison
        var city = item.city.toLowerCase();
        var country = item.country.toLowerCase();

        // Check if the user input matches the city or country 
        if (city.includes(searchString) || country.includes(searchString)) {
            //Create a new suggestion
            var suggestion = document.createElement("div");
            suggestion.classList.add("suggestion");

            // Add a click event listener to handle suggestion selections
            suggestion.addEventListener("click", function() {
                //Set the input field value to the selected city and country
              inputElement.value = item.city + ", " + item.country;
              // Clear the suggestion box 
                citySuggestionBox.innerHTML = "";
                // Hide the suggestion box 
                citySuggestionBox.style.display = "none";
            });
            // Append the suggestion to the suggestion box 
            citySuggestionBox.appendChild(suggestion);
        }
    })
}*/



