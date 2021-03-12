// require built in router in express.js
const router = require("express").Router();
const Workout = require("../models/workout");


// api route to post data to the database
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(workoutDB => {
            res.json(workoutDB)
        })
        .catch((err) => {
            res.json(err)
        })
});

// api route to search for a workout
router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then((workoutDB) => {
        res.json(workoutDB)
    })
    .catch((err) => {
        res.json(err)
    })
});

// api route to insert new workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        // this checks and ensures the new exercises added meets schema requirements
        { new: true, runValidators: true }
    )
})

module.exports = router;