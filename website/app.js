/* Global Variables */
const apiKey = '235425d1a2dae442b5d7754c4174fd70&units=imperial';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// Function called by event listener
function performAction(e) {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getWeather(baseURL, zipCode, apiKey)
        .then(data => {
            postData('/add', { date: newDate(), temperature: data.main.temp, userResponse: feelings });
        })
        .then(() => updateUI());
}

// Function to GET Web API Data
const getWeather = async (baseURL, zip, key) => {
    const res = await fetch(baseURL + zip + '&appid=' + key);
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

// Function to POST data
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

// Function to GET Project Data
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${allData.temperature}°F`;
        document.getElementById('content').innerHTML = `Feelings: ${allData.userResponse}`;
    } catch (error) {
        console.log('error', error);
    }
};

// Create a new date instance dynamically with JS
const newDate = () => {
    const d = new Date();
    return d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
};
