const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

// Where we will keep books
let books = [];

// --- Configure app ---
// Use CORS middleware
app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Beginning of the program
app.post('/post-book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

// New book page
app.get('/new-book', (req, res) => {
    res.sendFile(__dirname + "/new-book.html");
})

// Home page
app.get('/', (req, res) => {
    res.send("Home page of our API");
})

// Show a list of all the stored books
app.get('/book-list', (req, res) => {
    res.json(books);
});

// Listen for any incoming request
app.listen(port, () => console.log(`Listening on port ${port}`));