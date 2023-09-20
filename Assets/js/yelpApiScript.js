fetch('https://api.yelp.com/v3/events/awesome-event', {
    headers: {
        'Authorization': 'Bearer API_KEY',
        'accept': 'application/json'
    }
});