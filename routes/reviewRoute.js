const express = require("express");
const router = express.Router();
const reviewsCheck = require("../monitor/reviewCheck");


router.get("/", reviewsCheck.getReviews);
router.post("/", reviewsCheck.createReviews);


module.exports = router;