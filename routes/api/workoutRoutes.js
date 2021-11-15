const express = require("express");
const router = express.Router();
const Workout = require("../../model/Workout.js");

router.get("/",(req,res)=>{
    //console.log(req.body);
    Workout.find().sort({day:1}).then(dbWorkout => {
        console.log(dbWorkout);
        res.status(200).json(dbWorkout);
    })
    .catch(err => {
      res.status(500).json(err);
    });
     
})

router.post("/",(req,res)=>{
    //console.log(req.body);
    const workout = new Workout();
    
    Workout.create(workout)
    .then(dbWorkout => {
      res.status(200).json(dbWorkout);
    })
    .catch(err => {
      res.status(500).json(err);
    });
     
})

router.put("/:id", (req,res)=>{
    //console.log(req.body);

    Workout.findOneAndUpdate({"_id":req.params.id}, {$push: {"exercises": req.body}}).then(workout => {
        // console.log(workout);
        res.status(200).json(workout);
    })
    .catch(err => {
        res.status(500).json(err)
    })
    
})



module.exports = router;