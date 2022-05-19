// Imports
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();
const port = 8080;

// Indicate to Express.js that I'm using an additional plugin to treat parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get the source route
app.get('/', (req, res) => {
    res.send('Welcome on the Library API!');
});

// Dictionary of id (key) and strings (value) representing books title
let bookList = {
    1: 'The Bible',
    2: 'A Journey To The Centre Of The Earth'
};

// Get the list of every book in the list as a json
app.get('/books', (req, res) => {
    return res.json({books: bookList});
});

// Get a specific book, identified by it's id in the list
app.get('/books/:id', (req, res) => {
    let bookId = req.params.id;
    // Check if the book id asked exists or not
    if (Object.keys(bookList).includes(bookId)) {
        res.status(200);
        // Return the book name
        res.send(bookList[bookId]);
    } else {
        res.status(404);
        // Return an error
        res.send('Book not found.')
    }
});

// Post a new book
app.post('/books/:id', (req, res) => {
    let bookId = req.params.id;
    let bookName = req.body.name;
    // Check if the book id that needs to be added exists or not
    if (Object.keys(bookList).includes(bookId)) {
        res.status(409);
        // Return an error
        res.send('Book with this ID already exists.')
    } else {
        res.status(200);
        // Add the book to the list
        bookList[bookId] = bookName;
        // Return message of success
        res.send(`The book ${bookName} (ID = ${bookId}) was successfully added in the list.`)
    }
});

// Start the API
app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})