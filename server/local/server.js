const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, '../../dist') ));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/assects/json/header.json', function (req, res) {
    var data = require('../../src/assects/json/header.json');
    res.send(data);
})
app.get('/assects/json/portfolio.json', function (req, res) {
    var data = require('../../src/assects/json/portfolio.json');
    res.send(data); 
})
app.get('/images/bg/profile.png', function (req, res) {
    var data = require('../../src/images/profile.png');
    res.send(data);
})



app.listen(5001, () => console.log('Example app listening on port 5001!'));