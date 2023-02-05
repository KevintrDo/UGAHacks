const bar = document.getElementById("country") // search bar element

// Adding submit button functionality
const countryForm = document.getElementById("countryForm")
countryForm.addEventListener("submit", event => {
    window.open(`Website.html?country=${bar.value}`)
})