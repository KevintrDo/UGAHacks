const searchCoutnry = document.querySelector("")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5d30991482msh9a963f4cfd50771p122177jsneb00a7916b47',
		'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
	}
};

fetch('https://flight-radar1.p.rapidapi.com/airports/list', options)
	.then(response => response.json())
	.then(data => {
        console.log(data.rows.forEach(myFunction))
    });
    function myFunction(item) {
        if(item === '') {
            console.log(item.country);
        }
    }
	//.catch(err => console.error(err))
    
    
 