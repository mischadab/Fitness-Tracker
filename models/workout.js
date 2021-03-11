const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: 'Enter an exercise type'
                },
                name: {
                    type: String,
                    trim: true,
                    required: 'Enter the name of your exercise'
                },
                duration: {
                    type: Number,
                    trim: true,
                    required: 'Enter the duration of your exercise'
                },
                weight: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                reps: {
                    type: Number,
                }
            }
        ]
    },

    {
        toJSON: {
            virtuals: true
        }
    }

);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;