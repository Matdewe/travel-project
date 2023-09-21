/* USER GOAL: As a user I want to be able to search for a hotel that meet 
*/






const fetchHotels = () => {
  // gets user input const userInput = document.querySelector("#userQuery").value;

  const url =
    "https://hotels4.p.rapidapi.com/locations/v3/search?q=United%20States&locale=en_US&langid=1033&siteid=300000001";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "76a001a6c0mshaa5aee7010710afp13ac34jsn3f6097c6aac3",
      "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Need to be fixed");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const resultsDiv = document.querySelector("#results");
      // resultsDiv.innerHTML = JSON.stringify(data);

      for (let i = 0; i < data.sr.length; i++) {
        let myElm = document.createElement("p");
        myElm.textContent = data.sr[i].regionNames.primaryDisplayName;
        resultsDiv.appendChild(myElm);
      }
    })

    .catch((error) => console.error("Error", error));
};
fetchHotels();
