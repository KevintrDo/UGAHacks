const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const countryName = urlParams.get("country")

// User has submitted a country name
if (countryName != null) {
    //document.title = countryName
    document.getElementById("country").innerHTML = countryName
    document.getElementById("country").style = "visiblity: visible"    
}
