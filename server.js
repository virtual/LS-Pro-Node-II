const express = require('express');
const app = express();

const books = [
    {   id: 0,
        name: 'The Gunslinger' }, 
    {   id: 1,
        name: 'All the Light We Cannot See'}, 
    {   id: 2,
        name: 'Designing with the Mind in Mind'}
];

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.get('/multiply/:x/:y', (req,res) => {
    const total = req.params.x * req.params.y;
    // can only send back a string
    res.send(total.toString());
});
app.get('/books', (req,res) => {
    res.send(books)
});

app.get('/books', (req,res) => {
    books.forEach(book => {
        // id query is a string
        if (book.id.toString() === req.query.id) { 
            res.send(book.name)
        };
    });
});

app.listen(3000, ()=>{
    console.log('listening on 3000');
});