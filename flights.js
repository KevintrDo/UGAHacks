const queryStr = window.location.search
const urlParams2 = new URLSearchParams(queryStr)
const country = urlParams2.get("country")

// change heading to "Flights to [Country]"
document.getElementById("country-name").innerHTML = country
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5d30991482msh9a963f4cfd50771p122177jsneb00a7916b47',
		'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
	}
};

const countries = [];
const departureCity = [];
const items = []

fetch('https://flight-radar1.p.rapidapi.com/airports/list', options)
	.then(response => response.json())
    	.then(data => {
        data.rows.forEach(myFunction)
    });

function myFunction(item) {
    console.log(item)  
    if(item.country.toLowerCase() === country.toLowerCase()) {
        document.createElement("p")
        document.getElementById("countries").innerHTML += `${item.country}<br>`
        document.getElementById("departureCity").innerHTML += `${item.city}<br>`   
        document.getElementById("arrivalCity").innerHTML += `unable to implement<br>` 
        document.getElementById("departureTime").innerHTML += `unable to implement<br>` 
        document.getElementById("arrivalTime").innerHTML += `unable to implement<br>`
    }        
}	         

//const JSON = JSON.parse(countries[0]);
console.log(countries)
console.log(departureCity)
console.log(items)

//document.getElementById("countries").innerHTML = JSON //items["20"]["country"]
//document.getElementById("departureCity").innerHTML = departureCity[50]
