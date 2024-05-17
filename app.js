const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// const menuRoute = require()
// const bokningRoute = require()
// const userRoute = require()

const app = express();

app.use(cors());
app.use(bodyParser.json());

// routes
// app.use("/api/menu", menuRoute);
// app.use("/api/bookings", bokningRoute);
// app.use("/api/users", userRoute);


// ansluta till mongodb
mongoose.connect(process.env.DATEBASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Mongodb ansluten"))
.catch(err => console.log(err));

module.exports = app;