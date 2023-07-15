const express = require('express')

const router = express.Router()

const Workout = require('../models/workoutModel')

const {
    getworkouts,
    getworkout,
    createWorkout,
    deleteworkout,
    updateworkout
} = require('../controllers/workoutcontrollers') 
// GET ALL WORKOUTS
router.get('/', getworkouts )

// GET a single WORKOUTS
router.get('/:id', getworkout )

// POST A SINGLE WORKOUTS
router.post('/', createWorkout)

// DELETE A SINGLE WORKOUTS
router.delete('/:id', deleteworkout)

// POST A SINGLE WORKOUTS
router.patch('/:id',updateworkout)
   
module.exports = router