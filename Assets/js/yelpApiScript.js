

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '76a001a6c0mshaa5aee7010710afp13ac34jsn3f6097c6aac3'; // Replace with your RapidAPI API key
    const baseUrl = 'https://hotels4.p.rapidapi.com/locations/v3/search?q=United%20States&locale=en_US&langid=1033&siteid=300000001'; // Replace with the actual endpoint

    const hotelSearchForm = document.getElementById('hotel-search-form');
    const hotelResults = document.getElementById('hotel-results');

    // Initialize the Google Maps Geocoding service
    const geocoder = new google.maps.Geocoder();

    hotelSearchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get user input values
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const checkInDate = document.getElementById('check-in-date').value;
        const checkOutDate = document.getElementById('check-out-date').value;


        geocodeAddress(city, state, (location) => {
            if (location) {
                fetch(`${baseUrl}/hotels?latitude=${location.lat}&longitude=${location.lng}&check_in=${checkInDate}&check_out=${checkOutDate}`, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': apiKey,
                    },
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    displayHotelResults(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            } else {
                console.error('Location not found.');
            }
        });
    });

    function geocodeAddress(city, state, callback) {
        const address = `${city}, ${state}`;
        geocoder.geocode({ 'address': address }, (results, status) => {
            if (status === 'OK' && results.length > 0) {
                const location = results[0].geometry.location;
                callback({ lat: location.lat(), lng: location.lng() });
            } else {
                callback(null);
            }
        });
    }


    function displayHotelResults(hotels) {
        hotelResults.innerHTML = ''; // Clear previous results
        if (hotels.length > 0) {
            hotels.forEach((hotel, index) => {
                if (index < 10) { // Display only the first 10 hotels
                    const hotelResult = document.createElement('div');
                    hotelResult.textContent = `Hotel ${index + 1}: ${hotel.name}, Price: ${hotel.price}`;
                    hotelResults.appendChild(hotelResult);
                }
            });
        } else {
            hotelResults.textContent = 'No hotels found.';
        }
    }
});

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Hotel Search</title>
//     <!-- Load the Google Maps JavaScript API with a callback -->
//     <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCTpoBSTwh1Atk_YexuKNSSiJGR-__1nzo&libraries=places&callback=initMap" async defer></script>
// </head>
// <body>
//     <h1>Hotel Search</h1>
//     <form id="hotel-search-form">
//         <label for="city">City:</label>
//         <input type="text" id="city" name="city" required><br>

//         <label for="state">State:</label>
//         <input type="text" id="state" name="state" required><br>

//         <label for="check-in-date">Check-in Date:</label>
//         <input type="date" id="check-in-date" name="check-in-date" required><br>

//         <label for="check-out-date">Check-out Date:</label>
//         <input type="date" id="check-out-date" name="check-out-date" required><br>

//         <button type="submit">Search Hotels</button>
//     </form>

//     <div id="hotel-results">
//         <!-- Hotel results will be displayed here -->
//     </div>

//     <script src="./script.js"></script>
// </body>
// </html>



// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Yelp API Event Search</title>
//     <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// </head>
// <body>
//     <h1>Yelp API Event Search</h1>
    
//     <form id="search-form">
//         <label for="city">City:</label>
//         <input type="text" id="city" required>

//         <label for="state">State (Abbreviation):</label>
//         <input type="text" id="state" required>

//         <label for="start-date">Start Date:</label>
//         <input type="date" id="start-date" required>

//         <label for="end-date">End Date:</label>
//         <input type="date" id="end-date" required>

//         <button type="submit">Search</button>
//     </form>

//     <div id="results">
//         <h2>Event Results</h2>
//         <ul id="event-list">
            
//         </ul>
//         <!-- Display API results here -->
//     </div>

//     <script src="./script.js"></script>
// </body>
// </html> 

// document.getElementById('search-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const city = document.getElementById('city').value;
//     const state = document.getElementById('state').value;
//     const startDate = document.getElementById('start-date').value;
//     const endDate = document.getElementById('end-date').value;
//     const apiKey = "TXudpMYy4NlXQb6YbGwMdEyTGOtDezbNQ-BDhaNLT5NTKIfK_qngYNM3OzW5abJCmUzbnFMAOJkckXcg3jbtmFkPLDjnuIYlyUM6sYk8ePwqX4CdN1VC9-VK8PQJZXYx";

//     // Construct the API URL using the startDate and endDate
//     const apiUrl = `https://api.yelp.com/v3/events?location=${city},${state}&start_date=${startDate}&end_date=${endDate}&limit=10`;

//         .then(response => {
//             // Handle the API response here (list of featured events)
//             const events = response.data.events;
//             const eventList = document.getElementById('event-list');
//             // Display the event data to the user
//             eventList.innerHTML = '';

//             events.forEach(event => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = event.name;
//                 eventList.appendChild(listItem);
//             })
//         })
//         .catch(error => {
//             console.error(error);
//         });
//     });