const queryStr = window.location.search
const urlParams2 = new URLSearchParams(queryStr)
const country = urlParams.get("country")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5d30991482msh9a963f4cfd50771p122177jsneb00a7916b47',
		'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
	}
};

const countries = [];
const departureCity = [];
fetch('https://flight-radar1.p.rapidapi.com/airports/list', options)
	.then(response => response.json())
	.then(data => {
        console.log(data.rows.forEach(myFunction))
    });
    function myFunction(item) {
        if(item.country === country) {
            console.log(item.country);
            countries.push(item.country);
            departureCity.push(item.city);
        }        
    }	         
    console.log(countries)
    console.log(departureCity)