// require built in router in express.js
const router = require("express").Router();
const Workout = require("../models/workout");


// api route to post data to the database
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(workoutDB => {
            res.json(workoutDB)
        })
});