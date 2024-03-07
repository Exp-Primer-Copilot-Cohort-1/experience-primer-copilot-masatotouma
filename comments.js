// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create server
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is running at http://%s:%s", host, port);
});

// Read file
function readFile() {
    var data = fs.readFileSync('comments.json');
    var comments = JSON.parse(data);
    return comments;
}

// Write file
function writeFile(comments) {
    var data = JSON.stringify(comments);
    fs.writeFileSync('comments.json', data);
}

// Get all comments
app.get('/comments', function (req, res) {
    var comments = readFile();
    res.send(comments);
});

// Add comments
app.post('/comments', function (req, res) {
    var comments = readFile();
    var comment = req.body;
    comments.push(comment);
    writeFile(comments);
    res.send(comments);
});

// Delete comments
app.delete('/comments', function (req, res) {
    var comments = readFile();
    comments = [];
    writeFile(comments);
    res.send(comments);
});

// Path: index.html
// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Create server
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is running at http://%s:%s", host, port);
});

// Read file
function readFile() {
    var data = fs.readFileSync('index.html');
    return data;
}

// Get index.html
app.get('/', function (req, res) {
    var data = readFile();
    res.send(data);
});

// Path: style.css
// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Create server
var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is running at http://%s:%s", host, port);
});

// Read file
function readFile() {
    var data = fs.readFileSync('style.css');
    return data;
}