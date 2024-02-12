const express = require("express");
const router = express.Router();

const {createUser} = require("../controllers/userController")

router.post("/user/register", createUser)

module.exports = router;

