

const express = require("express");
const app = express();
const port = 3000;

// Task 1
app.get("/hello", (req, res) => {
    res.json({ msg: "Hello world"});
});


// Task 2
app.get('/echo/:id', (req, res) => {
   res.json({ id: req.params.id}) ;
});

// Task 3
app.post('/sum', (req, res) => {
    const numbers = req.body.numbers;
    const sum = numbers.reduce((acc, currentItem) => acc + currentItem, 0);
    res.json({ sum: sum});
});

// Task 4
app.use(express.static('public'));

// Task 5
let list = [];
app.post('/list', (req, res) => {
    const text = req.body.text;
    list.push(text);
    res.json({ list: list });
});

// Make server to listen port 3000.
app.listen(port, () => {
    console.log("Server listening a port ${port}!")
});


/*

const http = require("http");

console.log("Server running...");

http.createServer(function(req, res) {
    res.write("Hello World!");
    res.end();
    console.log("Browser reached us!");
}).listen(3000);

*/