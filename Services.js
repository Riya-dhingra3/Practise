
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
  try {
    const { array } = req.body;
    
    // Generate user_id
    const user_id = "John_doe_17091999"; // Replace with your user_id generation logic
    
    // Process array
    const evenNumbers = array.filter(num => num % 2 === 0);
    const oddNumbers = array.filter(num => num % 2 !== 0);
    const alphabetsUpperCase = array.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());

    // Response
    const response = {
      "user_id": user_id,
      "is_success": true,
      "even_numbers": evenNumbers,
      "odd_numbers": oddNumbers,
      "uppercase_alphabets": alphabetsUpperCase
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ "is_success": false, "error": "Internal server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // corrected the console.log statement
});
