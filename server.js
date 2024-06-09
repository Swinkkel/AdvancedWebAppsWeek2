

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