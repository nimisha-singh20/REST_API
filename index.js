const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint to handle JSON data
app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    if (!data) {
        return res.status(400).json({
            is_success: false,
            message: "Data not provided"
        });
    }

    const user_id = "nimisha_singh_20122002"; // Replace with your details
    const email = "nimisha.singh2021@vitstudent.ac.in"; // Replace with your details
    const roll_number = "21BCE5188"; // Replace with your details

    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (item >= 'a' && item <= 'z' && item > highest_lowercase_alphabet) {
                highest_lowercase_alphabet = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : []
    });
});

// GET endpoint to return operation code
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
