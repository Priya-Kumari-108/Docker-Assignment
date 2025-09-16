const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static HTML form
app.use(express.static(path.join(__dirname, "views")));

// Handle form submission
app.post("/submit", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Send data to Flask backend
        const response = await axios.post("http://backend:5000/api/data", {
            name,
            email,
            password
        });

        res.send(`
            <h2>Data submitted successfully!</h2>
            <p>${JSON.stringify(response.data)}</p>
            <a href="/">Go Back</a>
        `);
    } catch (error) {
        res.status(500).send("Error sending data to backend");
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running at http://localhost:${PORT}`);
});
