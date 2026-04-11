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

  try {
    // Build the weather API URL using user input
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}&units=metric`;

    // Fetch weather data from OpenWeather
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    // If city is not found, show error
    if (!weatherResponse.ok) {
      showMessage("City not found. Please try again.", "red");
      return;
    }

    // Display weather information on the page
    displayWeather(weatherData);

    // Get country code from weather data (e.g., CA, US)
    const countryCode = weatherData.sys.country;

    // Build URL for REST Countries API
    const countryUrl = `https://restcountries.com/v3.1/alpha/${countryCode}`;

    // Fetch country details
    const countryResponse = await fetch(countryUrl);
    const countryData = await countryResponse.json();

    // Display country information
    displayCountry(countryData[0]);

    // Success message
    showMessage("Data loaded successfully.", "green");
  } catch (error) {
    // Handle unexpected errors (network issues, etc.)
    showMessage("Something went wrong. Please try again later.", "red");
    console.error("Error:", error);
  }
}

// Function to display weather data
function displayWeather(data) {
  const iconCode = data.weather[0].icon;

  // Build weather icon URL
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Insert weather details into HTML
  weatherContent.innerHTML = `
    <p><strong>City:</strong> ${data.name}</p>
    <p><strong>Country Code:</strong> ${data.sys.country}</p>
    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
    <p><strong>Feels Like:</strong> ${data.main.feels_like}°C</p>
    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    <p><strong>Coordinates:</strong> ${data.coord.lat}, ${data.coord.lon}</p>
    <img src="${iconUrl}" alt="Weather icon" class="weather-icon">
  `;

  // Show weather card
  weatherCard.classList.remove("hidden");
}

// Function to display country data
function displayCountry(country) {
  // Convert languages object into readable text
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  // Convert currencies object into readable text
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map(currency => `${currency.name} (${currency.symbol || "N/A"})`)
        .join(", ")
    : "N/A";

  // Insert country details into HTML
  countryContent.innerHTML = `
    <p><strong>Name:</strong> ${country.name.common}</p>
    <p><strong>Official Name:</strong> ${country.name.official}</p>
    <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
    <p><strong>Region:</strong> ${country.region}</p>
    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    <p><strong>Languages:</strong> ${languages}</p>
    <p><strong>Currencies:</strong> ${currencies}</p>
    <img src="${country.flags.png}" alt="Flag of ${country.name.common}" class="flag">
  `;

  // Show country card
  countryCard.classList.remove("hidden");
}

// Function to display messages to the user
function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}