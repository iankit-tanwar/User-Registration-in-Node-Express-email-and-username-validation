const express = require("express");
const { teacherController } = require("../controller/teacherController");
const { authTech } = require("../middleware/authTech");



const teacherRoute = express.Router();


teacherRoute.post('/teacher/create',authTech,teacherController)


module.exports = {teacherRoute}