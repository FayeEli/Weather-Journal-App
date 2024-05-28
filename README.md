# Weather-Journal App

## Project Overview
This project is a web application that allows users to enter their zip code and feelings, fetches the weather information for the provided zip code using the OpenWeatherMap API, and dynamically updates the UI to display the weather and user data.

## Table of Contents
- [Project Overview](#project-overview)
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Acknowledgements](#acknowledgements)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- An API key from [OpenWeatherMap](https://openweathermap.org/)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-journal-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather-journal-app
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```
    API_KEY=your_api_key
    ```

### Ignoring `node_modules`
The `node_modules` folder, which contains all the project's dependencies, should not be committed to version control. This folder can be re-created by running `npm install` based on the `package.json` and `package-lock.json` files. Ensure you have a `.gitignore` file in your project root with the following line:
    ```
    node_modules/
    ```

## Project Structure

weather-journal-app/
├── node_modules
├── website/
│ ├── app.js
│ ├── index.html
│ └── styles.css
├── gitattributes
├── gitignore
├── package-lock.json
├── package.json
└── README.md
├── server.js


## Usage
1. Start the server:
    ```bash
    npm start
    ```
2. Open your browser and go to `http://localhost:8000`.
3. Enter a zip code and your feelings in the provided fields.
4. Click the "Generate" button to fetch and display the weather information along with your feelings.

## API Reference
- **GET /all**
    - Retrieves the current project data.
- **POST /add**
    - Adds new data to the project.

## Acknowledgements
- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API.
- [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/) for the server framework.
