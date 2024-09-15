const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());  // For parsing JSON bodies
app.use(express.static('public'));  // Serve static files from "public" folder


// Example login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Dummy authentication logic
    if (username === 'Sarthak' && password === '12345') {
        return res.json({ success: true, token: 'abc123' });
    } else {
        return res.json({ success: false, message: 'Invalid credentials' });
    }
});

// Fallback for undefined routes
app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});