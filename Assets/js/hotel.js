fetchData();
async function fetchData() {
const url = "https://hotels4.p.rapidapi.com/locations/v3/search?q=United%20States&locale=en_US&langid=1033&siteid=300000001";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "76a001a6c0mshaa5aee7010710afp13ac34jsn3f6097c6aac3",
    "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url , options);
  const result = await response.text();

const data = JSON.parse(result);

console.log(data);
} catch(error) {
console.error(error);

}
} fetchData();
