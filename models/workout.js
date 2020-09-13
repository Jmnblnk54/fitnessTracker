const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            name:{
                type: String,
                trim: true
            },
            type:{
                type: String
            },
            sets:{
                type: Number,
                required: "Enter sets"
            },
            reps:{
                type: Number,
                required: "Enter reps"
            },
            weight:{
                type: Number,
                required: "Enter weight"
            },
            duration:{
                type: Number,
                required: "Enter duration"
            }
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    } 
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;