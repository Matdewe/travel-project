// These are the bits of code underneath the tabs and nav bar
const hotels = document.getElementById("hotels");
const about = document.getElementById("about");
const aboutShortcut = document.getElementById('about-shortcut');
const cityPictureSearch = document.getElementById('city-image-search');

/* This is the query selector for the tabs/buttons*/
const aboutButton = document.querySelector(".about-button");
const hotelsButton = document.querySelector(".hotels-button");
const cityViewerButton = document.querySelector('.city-viewer-button');

// These are the event listeners for the buttons^ 
aboutShortcut.addEventListener('click', toggleAbout);
aboutButton.addEventListener('click', toggleAbout);
hotelsButton.addEventListener('click', toggleHotels);
cityViewerButton.addEventListener('click', toggleViewer);

//Function to be called when the 'City Viewer" tab is clicked on
// In this we ensure all content besides the viewer content is hidden
function toggleViewer() {
    hotels.classList.remove('is-active');
    hotels.classList.add('is-hidden')
    about.classList.remove('is-active');
    about.classList.add('is-hidden')
    cityPictureSearch.classList.remove('is-hidden');
    cityPictureSearch.classList.add('is-active');
}
//Function to be called when the 'About Us" tab or navbar link is clicked on
// In this we ensure all content besides the About Us content is hidden
function toggleAbout() {
    hotels.classList.remove('is-active');
    hotels.classList.add('is-hidden')
    cityPictureSearch.classList.remove('is-active');
    cityPictureSearch.classList.add('is-hidden');
    about.classList.remove('is-hidden');
    about.classList.add('is-active');
}
//Function to be called when the 'Hotel" tab is clicked on
// In this we ensure all content besides the Hotel content is hidden
function toggleHotels() {
    about.classList.remove('is-active');
    about.classList.add('is-hidden')
    cityPictureSearch.classList.remove('is-active');
    cityPictureSearch.classList.add('is-hidden');
    hotels.classList.remove('is-hidden');
    hotels.classList.add('is-active');
}

// These are the values within the section for Hotel search
const cityInput = document.getElementById('city-input');
const countryInput = document.getElementById('country-input');
const submitButton = document.getElementById('submitBtn');



submitButton.addEventListener("click", displayValues);
// Function to be called anytime the submit button for the hotel search is clicked on
function displayValues() {
    console.log(cityInput.value);
    console.log(countryInput.value);

    const city = cityInput.value;
    const country = countryInput.value
    fetchData(city, country)
}

/* Declaring an asynchronous function to fetch the API date.
  An asynchronous operation means that a process operates 
  independently of other processes. SUNCHronous code will execute from
  the top to the bottom, but the ASYNCHronous code will start at the
  top and execute until it hits something that is asynchronous, and
  then it will execute that and the regular code at the exact same time*/
const fetchData = async (city, country) => {
    const apiKey = 'API-KEY'; // this API has a limit of 10 requests per day
    const cityName = city;
    const countryName = country;
    const url = `https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=${cityName}&countryName=${countryName}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
            }
        });
        /*  If we do not get a good response back from the network, we are throwing an error
            that the request failed */
        if (!response.ok) {
            throw new Error('Request failed');
        }
        // Parse the JSON data from the HTTP response and store it in the 'data' variable
        const data = await response.json();

        // Get the container where we will display hotel information
        const hotelContainer = document.getElementById('hotelContainer');

        // Clear any existing content in the container
        hotelContainer.innerHTML = '';

        if (data && typeof data === 'object') {
            // If data is an object, create elements to display hotel information
            const hotelElement = document.createElement('div');
            hotelElement.classList.add('hotel');

            const hotelNameElement = document.createElement('a');
            // Set the link
            hotelNameElement.href = data.link;
            // Set the hotel name
            hotelNameElement.textContent = data.name;
            // Open link in a new tab
            hotelNameElement.target = '_blank';

            // Creating <p> where content of the rating for the hotel will be displayed
            const hotelRatingElement = document.createElement('p');
            hotelRatingElement.textContent = `Rating: ${data.rating}`;

            // Append the elements to the container
            hotelElement.appendChild(hotelNameElement);
            hotelElement.appendChild(hotelRatingElement);

            hotelContainer.appendChild(hotelElement);
        } else {
            // Handle the case when data is not an object
            console.error('Invalid data structure received from the API');
        }
    } catch (error) {
        console.error(error);
    }
};