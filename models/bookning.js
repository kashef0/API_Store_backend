const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bokningSchema = new Schema({                       // Definierar ett schema för bokningar
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
        required: true
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