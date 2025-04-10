const express = require('express'); // import express module
const cors = require('cors'); // import cors module
const fetch = require('node-fetch'); // not sure maybe allow to use fetch?

const app = express(); // creates instance of express
const PORT = 5000; // define our port at 5000

app.use(cors()); // our express (app) using an instance of cors ? ? 

// below is our express app using the method git to request our data based on the specific path. 
app.get('/api/player/:username', async (req, res) => {
    const { username } = req.params;
    const apiURL = `https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=${username}`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// uses listen method for when our front end makes calls to it. i think when the server first gets called
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});