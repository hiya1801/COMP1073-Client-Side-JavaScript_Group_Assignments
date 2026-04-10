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
async function getData() {
  const city = cityInput.value.trim();

  // Check if input is empty
  if (!city) {
    showMessage("Please enter a city name.", "red");
    return;
  }

  // Show loading message and hide previous results
  showMessage("Loading data...", "#1d4ed8");
  weatherCard.classList.add("hidden");
  countryCard.classList.add("hidden");
}

// Function to display messages to the user
function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}