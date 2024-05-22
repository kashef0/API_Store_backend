const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const menuSchem = new Schema({              // Definierar ett schema för menu
    title: {
        type: String,
        required: true,
        unique: true,
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
    },
    takeOut: {
        type: String,
    }

});

module.exports = mongoose.model("menu", menuSchem);