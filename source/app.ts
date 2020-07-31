import express = require('express');
const app : express.Application = express();
import *as dotenv from "dotenv";
dotenv.config();
import cookieParser=require('cookie-parser');
import cors=require('cors');
import bodyParser = require('body-parser');

/** CORS */
app.use(cors());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* handler cookie from client */
app.use(cookieParser());

/* config method parse with json and url */
app.use(express.json()); /*!> for parsing application/json */
app.use(express.urlencoded({ extended: true })); /*!> for parsing application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* config direction of router */
var bridge = require('./routers/bigBridge');

/* declare router */
app.use('/', bridge);

app.listen(process.env.PORT, function () {
    console.log("Server is listening");
});