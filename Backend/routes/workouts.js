const express = require('express')

const router = express.Router()

router.get('/',(req,res) => {
    req.json({mssg: "Get all the workouts"})
})

router.get('/:id' ,(req,res) =>{
    res.json({mssg : "GET a single workout"})
})


// POST a new workout
router.post('/' ,(req,res) =>{
    
    res.json({mssg : "POST a new  workout"})
})

// DELETE a workout 
router.delete('/:id' ,(req,res) =>{
    res.json({mssg : "DELETE a workout"})
})

// UPDATE a workout
router.patch('/:id' ,(req,res) =>{
    res.json({mssg : "UPDATE a workout"})
})

module.exports = router