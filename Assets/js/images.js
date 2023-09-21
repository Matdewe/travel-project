document.addEventListener("DOMContentLoaded", function () {

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



    const API_KEY = '39543286-326e1261c72f19c16eb98a1da';
    const URL = "https://pixabay.com/api/";
    const imageResults = document.getElementById("imageResults");
    const searchBtn = document.getElementById("searchBtn");
    const cityInput = document.getElementById("cityInput");


    // Function to be called when the submit button is clicked
    searchBtn.addEventListener("click", function () {
        const city = cityInput.value.trim();
        /* Any following functions will only be called in the case that something has been entered
            by the user in the 'city-input' space.
        */
        if (city) {
            /* encodeURIComponent basically means that any special characters that could be present
                within the city name are corrected in way that it can still be fed into our URL. 
                Here we are making a varaible that called 'query' that is basically the same thing
                as user input for city, but in correct formatting for API reading.
            */
            const query = encodeURIComponent(city);
            const requestURL = `${URL}?key=${API_KEY}&q=${query}&per_page=3`;

            // Fetching Pixabay Data
            fetch(requestURL)
                // Convert the HTTP response to JSON format
                .then(response => response.json())
                .then(data => {
                    // IF there are any results found in Pixabay library
                    if (data.hits.length > 0) {
                        // Clear previous results, when any
                        imageResults.innerHTML = "";
                        /* for each search result, attach that to a newly made <im> element
                        and display it to the 'imageResults' div */
                        data.hits.forEach(hit => {
                            const imageElement = document.createElement("img");
                            imageElement.src = hit.webformatURL;
                            imageResults.appendChild(imageElement);
                        });
                        /* If no results are found in Pixabay library, display a message on the screen
                            letting user know that no pictures were found */
                    } else {
                        imageResults.innerHTML = "No images found for the city.";
                    }
                })
                /* If there is an error in fetching API data library, display a message to the
                'imageResults' div that let's the user know of the error haven occured */
                .catch(error => {
                    console.error(error);
                    imageResults.innerHTML = "An error occurred while fetching images.";
                });
            /* If no input from user, but the submit button is pressed anyways, the screen will display
            a message reminding them a city value is needed to provide images */
        } else {
            imageResults.innerHTML = "Please enter a city to search for images.";
        }
    });
});

