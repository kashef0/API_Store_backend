const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewSchema = new Schema({                               // Definierar ett schema för user
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    feedback: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("review", reviewSchema);