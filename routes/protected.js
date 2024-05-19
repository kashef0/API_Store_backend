const express = require("express");
const router = express.Router();
const auth = require("../auth/autentisering");



router.get("/api/protected", auth, (req, res) => {
    res.json({message: "shyddad route! "});
});



module.exports = router;