fetch ("https://pixabay.com/api/?key=39543286-326e1261c72f19c16eb98a1da&q=cars&image_type=photo&pretty=true")
.then((response)=>{
    console.log(response)
    return response.json()

})

.then((data)=>{
    console.log(data)
})

var searchBtn = document.getElementById('');
.addEventListener('click', function(){
    console.log("click")
    console.log(.value)
})

var searchBar = document.getElementById('');
console.log()