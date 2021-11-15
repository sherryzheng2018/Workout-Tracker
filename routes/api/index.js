const express = require('express');
const router = express.Router();
const workoutRoutes = require("./workoutRoutes");


router.use("/workouts",workoutRoutes);


module.exports = router;