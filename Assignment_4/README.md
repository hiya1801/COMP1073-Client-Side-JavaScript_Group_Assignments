# Weather + Country Explorer

## Assignment: Third-Party APIs  
**Course:** Web Development  
**Type:** Group Assignment  

---

## Contribution Breakdown

- **Hiyaben Hareshbhai Jayswal**  
  Responsible for frontend development including `index.html` and `style.css`. Designed the layout, styling, responsiveness, and overall user interface.

- **Abiskar Chhetri**  
  Responsible for JavaScript development in `script.js`. Implemented API integration, data fetching, and dynamic content rendering.

---

## Project Description

This project is a web application that demonstrates how to use third-party APIs using JavaScript.

The application allows users to:
- Enter a city name
- View real-time weather data
- View detailed country information related to that city

---

## APIs Used

### OpenWeather API  
Used to fetch real-time weather data such as:
- Temperature  
- Weather condition  
- Humidity  
- Wind speed  

Documentation: https://openweathermap.org/api  

---

### REST Countries API  
Used to fetch country details such as:
- Country name  
- Capital  
- Population  
- Languages  
- Currency  

Documentation: https://restcountries.com/  

---

## Features

- Search for any city  
- Fetch and display live weather data  
- Display country information based on API response  
- Show additional details like languages and currencies  
- Error handling for invalid city input  
- Responsive and clean user interface  

---

## How It Works

1. User enters a city name  
2. Application sends request to OpenWeather API  
3. Weather data is displayed  
4. Country code is extracted from weather response  
5. Application sends request to REST Countries API  
6. Country data is displayed on the page  

---

## Enhancements

- Combined two APIs into one application  
- Displayed extra information beyond basic tutorial  
- Improved UI with modern styling  
