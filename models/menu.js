const mongoose = require("mongoose");

const menuSchem = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    descrip: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model("menu", menuSchem);