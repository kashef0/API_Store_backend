const express = require("express");
const router = express.Router();
const bookingCheck = require("../monitor/bookingCheck");
const auth = require("../auth/autentisering");

router.get("/", bookingCheck.getBookings);
router.post("/", bookingCheck.createBooking);
router.put("/:id", auth, bookingCheck.updateBooking);
router.delete("/:id", auth, bookingCheck.deleteBooking);


module.exports = router;