fetchData();
async function fetchData() {
    const url = 'https://booking-com.p.rapidapi.com/v1/hotels/search?checkin_date=2023-09-27&dest_type=city&units=metric&checkout_date=2023-09-28&adults_number=2&order_by=popularity&dest_id=-553173&filter_by_currency=USD&locale=en-gb&room_number=1&children_number=1&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '97c6814f89msh82fc6cce03210eep142519jsn89da5134b4ae',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();

        // Parse the JSON response
        const data = JSON.parse(result)

        // Work with the data objects
        console.log(data)
    } catch(error){
        console.error(error);
    }
}