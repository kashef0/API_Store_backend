"use strict";

const Feedback = require("../models/review");

// hämta review
exports.getReviews = async (req, res) => {
    try {
        const reviews = await Feedback.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// skapa en ny review
exports.createReviews = async (req, res) => {
    try {
        const newReviews = new Feedback(req.body);
        const savedReview = await newReviews.save();
        res.json(savedReview);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};