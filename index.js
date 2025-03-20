const express = require('express');
const axios = require('axios');
const pool = require('./db');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
//app.use(express.static(path.join(__dirname, 'public')));

// Ensure the server is online
app.listen(PORT, () => console.log(`Server is online on http://localhost:${PORT}`));



app.get('/random-cocktail', async (req, res) => {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching random drink', error);
        res.status(500).json({ error: 'Failed to fetch random cocktail' });
    }
});
