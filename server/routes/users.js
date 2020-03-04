const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

/* GET users listing. */
router.post("/", UserController.convertNumberToWaLink);

module.exports = router;
