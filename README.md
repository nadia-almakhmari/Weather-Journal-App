# WeatherJournal App

## Overview

The WeatherJournal App is a web application that allows users to check the current weather based on the ZIP code entered and make journal entries about their feelings related to the weather. The app integrates with the OpenWeatherMap API to fetch real-time weather data and stores user entries on a server.

## Features

- **Weather Information:** Users can enter a ZIP code, and the app fetches and displays the current weather information using the OpenWeatherMap API.
  
- **User Journal Entries:** Users can input their feelings and view the most recent entry, which includes the weather details.

- **Server Integration:** The app communicates with a server to store and retrieve user entries. The server has endpoints for storing weather entries and retrieving the most recent entry.

## Technologies Used

- **HTML:** Markup language for structuring the app.
- **CSS:** Stylesheet language for styling the app.
- **JavaScript (Client-Side):** Programming language for client-side functionality.
- **Node.js (Server-Side):** JavaScript runtime for server-side execution.
- **Express.js:** Server framework for building web applications.
- **OpenWeatherMap API:** External API for fetching real-time weather data.

## Project Structure

- **`index.html`:** The main HTML file containing the structure of the app.
  
- **`styles.css`:** The CSS file containing the styling for the app.

- **`app.js`:** The JavaScript file responsible for the app's functionality, including fetching weather data and interacting with the server.

- **`server.js`:** The server-side JavaScript file handling server logic, storing user entries, and serving static files.
