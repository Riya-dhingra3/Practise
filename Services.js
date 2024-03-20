const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define the POST route /bfhl
app.post('/bfhl', (req, res) => {
    // Extract data array from request body
    const { data } = req.body;

    // Your user_id (fullname_dob)
    const userId = "john_doe_17091999";

    // Mock email and roll number
    const email = "john@xyz.com";
    const rollNumber = "ABCD123";

    // Initialize arrays for even numbers, odd numbers, and alphabets
    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];

    // Loop through the data array
    data.forEach(item => {
        if (typeof item === 'number') {
            // Check if the item is a number
            if (item % 2 === 0) {
                // If it's even, push to evenNumbers array
                evenNumbers.push(item.toString());
            } else {
                // If it's odd, push to oddNumbers array
                oddNumbers.push(item.toString());
            }
        } else if (typeof item === 'string') {
            // Check if the item is a string
            if (/^[a-zA-Z]+$/.test(item)) {
                // If it contains only alphabets, convert to uppercase and push to alphabets array
                alphabets.push(item.toUpperCase());
            }
        }
    });

    // Construct response object
    const responseObject = {
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        even_numbers: evenNumbers,
        odd_numbers: oddNumbers,
        alphabets: alphabets
    };

    // Send response
    res.json(responseObject);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
