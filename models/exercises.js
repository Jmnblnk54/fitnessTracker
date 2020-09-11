const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;