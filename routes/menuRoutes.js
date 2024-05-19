const express = require("express");
const router = express.Router();
const menuCheck = require("../monitor/menuCheck");
const auth = require("../auth/autentisering");

router.get("/", menuCheck.getMenus);
router.post("/", auth, menuCheck.createMenu);
router.put("/:id", auth, menuCheck.updateMenu);
router.delete("/:id", auth, menuCheck.deleteMenu);


module.exports = router;