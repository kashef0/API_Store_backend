const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const menuRoute = require("./routes/menuRoutes");
const bokningRoute = require("./routes/bookingRoute");
const userRoute = require("./routes/userRoute");
const protected = require("./routes/protected");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use("/api/menu", menuRoute);
app.use("/api/bookings", bokningRoute);
app.use("/api/users", userRoute);
app.use("/api/protected", protected);

// ansluta till mongodb
mongoose.connect(process.env.DATEBASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connected to MongoDb..."))
.catch(err => console.log(err));

module.exports = app;