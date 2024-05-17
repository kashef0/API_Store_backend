const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();


const app = express();

app.use(cors());
app.use(bodyParser.json());



// ansluta till mongodb
mongoose.connect(process.env.DATEBASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Mongodb ansluten"))
.catch(err => console.log(err));

module.exports = app;