const express = require("express");
const router = express.Router();
const db = require("../models");

//display workouts
router.get("/workouts", (req, res) =>{
    db.Workout.find({})
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        res.json(err);
    });
});

//display workout range
router.get("/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        res.json(err);
    });
});

//add new workout plan
router.post("/workouts", (req, res) => {
    db.Workout.create({})
    .then(dbworkout => res.json(dbworkout))
    .catch(err => {
        console.log("err", err)
        res.json(err);
    });
});
    
//add exercises to previous workout
router.put("/workouts/:id", ({ body, params }, res) =>{
    console.log(params.id)
    db.Workout.findByIdAndUpdate(params.id,
        {$push: { exercises: body } }, { new: true })
        .then(dbworkout => {
            res.json(dbworkout)
        });
});

module.exports = router;