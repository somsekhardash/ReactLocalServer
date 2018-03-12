const express = require('express');
const app = express();
const path = require("path");
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import HeaderBanner from "./../../src/component/ssrMolecule/headerBanner/index";
import template from "./template";



app.use(express.static(path.join(__dirname, '../../distP') ));

app.get('/', (req, res) => {
    const appString = renderToString(<HeaderBanner />);
    res.send(template({
      body: {appString},
      title: "Som"
    }));
});


app.get('/assects/json/header.json', function (req, res) {
    var data = require('../../src/assects/json/header.json');
    res.send(data);
})
app.get('/assects/json/portfolio.json', function (req, res) {
    var data = require('../../src/assects/json/portfolio.json');
    res.send(data); 
})
app.get('/assects/json/service.json', function (req, res) {
    var data = require('../../src/assects/json/service.json');
    res.send(data); 
})
app.get('/images/bg/profile.png', function (req, res) {
    var data = require('../../src/images/profile.png');
    res.send(data);
})
app.get('/manifest.json', function (req, res) {
    var data = require('./../../src/assects/manifest.json');
    res.send(data);
})




app.listen(5001, () => console.log('This is prod -  5001!'));