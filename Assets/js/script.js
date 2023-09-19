// Waiting for the document to be fully loaded before it runs
document.addEventListener("DOMContentLoaded", function () {
    // gets the button element with the fetchData ID
    const fetchDataButton = document.getElementById("fetchData");
    // where api data will be displayed
    const outputDiv = document.getElementById("output");
// creates options object to specify the http request
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    };
// event listner to the fetchDataButton
    fetchDataButton.addEventListener("click", function () {
        // uses fetch for the api to get the data form trip adviser
        fetch(
            "https://test.api.amadeus.com/v1/security/oauth2/token",
            options
        )
        // turns it into JSON object
            .then((response) => response.json())
            // handles the JSON data returned from the api
            .then((data) => {
                // displays data to json in string in the 'output' div
                outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            // displays the errors 
            .catch((err) => {
                console.error(err);
                outputDiv.innerHTML = `Error: ${err}`;
            });
    });
});

