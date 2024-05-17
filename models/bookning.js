const mongoose = require("mongoose");

const bokningSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true

    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: trusted
    },
    email: {
        type: String,
        required: true
    },
    Antal_people: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("booking", bokningSchema);