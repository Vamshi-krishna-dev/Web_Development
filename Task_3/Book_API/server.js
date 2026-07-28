const express = require("express");
const app = express();
const port = 3000;

//Middleware to read Json Data
app.use(express.json());

//In-memory Array
let books = [
    {
        id: 1,
        title: "JavaScript Basics",
        Author: "John Doe"
    },
    {
        id: 2,
        title: "Node.js in Action",
        Author: "Jane Smith"
    }
]

// Get All Books
app.get("/books", (req, res) => {

    res.json(books);
});

// Post a new book
app.post("/books", (req, res) => {
    const {title, Author} = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        Author
    };
    books.push(newBook);
    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
});

// Update a book
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {title, Author} = req.body;
    const book = books.find(book => book.id == id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    book.title = title;
    book.Author = Author;

    res.json({
        message: "Book updated successfully",
        book
    });
});

// Delete a book
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const bookIndex = books.findIndex(book => book.id == id);

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books.splice(bookIndex, 1);
    res.json({
        message: "Book deleted successfully"
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
