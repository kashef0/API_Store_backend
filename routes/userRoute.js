const express = require("express");
const router = express.Router();
userCheck = require("../monitor/userCheck");

router.get("/register", userCheck.register);
router.post("/login", userCheck.login);
router.post("/register", userCheck.register);

module.exports = router;