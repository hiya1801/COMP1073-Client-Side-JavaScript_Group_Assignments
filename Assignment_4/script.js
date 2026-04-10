// Store your OpenWeather API key here
const apiKey = "b3bd4d943bce5e136bd399de785ee63c";

// Get references to important elements on the page
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");

const weatherCard = document.getElementById("weatherCard");
const countryCard = document.getElementById("countryCard");

const weatherContent = document.getElementById("weatherContent");
const countryContent = document.getElementById("countryContent");

// Event listeners for button click and Enter key press
searchBtn.addEventListener("click", getData);

cityInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getData();
  }
});

// Main function that runs when user searches a city
function getData() {
  console.log(cityInput.value);
}