require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//==================Routes=====================/
const addRouter = require('./Routes/add');
const getRouter = require('./Routes/get');
const editRouter = require('./Routes/edit');
const deleteRouter = require('./Routes/delete');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //json main bhi pass kar rahe hai

app.use(addRouter);
app.use(getRouter);
app.use(editRouter);
app.use(deleteRouter);

mongoose.connect(process.env.URI + process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT, () => console.log("Server is running : 3500."));