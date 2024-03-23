// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware */
// configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross-origin allowance (you need to install the 'cors' package)
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 4000;

// Create an object to store project data
const projectData = {
    weatherEntries: [],
    mostRecentEntry: '',
};


app.get('/', (req, res) => {
    res.sendFile(__dirname + '../index.html');
});

// Endpoint to get the most recent entry
app.get('/api/recentEntry', (req, res) => {
    res.send(projectData.mostRecentEntry);
});

// Endpoint to get all weather entries
app.get('/api/weatherEntries', (req, res) => {
    res.send(projectData.weatherEntries);
});

// Endpoint to post a new weather entry
app.post('/api/weatherEntry', (req, res) => {
    const newEntry = req.body;
    projectData.weatherEntries.push(newEntry);
    projectData.mostRecentEntry = newEntry;
    res.status(201).send('Entry added successfully');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});