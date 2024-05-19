const express = require("express");
const router = express.Router();
userCheck = require("../monitor/userCheck");

router.post("/login", userCheck.login);
router.post("/register", userCheck.register);

module.exports = router;