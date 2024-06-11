const express = require('express')
// const mongoose = require('mongoose')

const {
    getworkouts,
    getworkout,
    createworkout                                // telling the functions that are actually required 
} = require('../Controllers/WorkoutController')
const router = express.Router()


// Get all the workout
router.get('/',getworkouts)



// get a single workout
router.get('/:id' ,getworkout)


// POST a new workout
router.post('/' , createworkout)
    
   


// DELETE a workout 
router.delete('/:id' ,(req,res) =>{
    res.json({mssg : "DELETE a workout"})
})

// UPDATE a workout
router.patch('/:id' ,(req,res) =>{
    res.json({mssg : "UPDATE a workout"})
})

module.exports = router