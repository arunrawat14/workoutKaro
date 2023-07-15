const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


// Get All Workouts 
const getworkouts = async(req,res)=> {
   
        const workout = await Workout.find({}).sort({createdAt:-1})
        res.status(200).json(workout)
}


// Get single Workouts 
const getworkout = async(req,res)=> {
   
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return  res.status(400).json({error: 'No such workout '})
    }
 
    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(400).json({error: 'No such workout '})
    }

    res.status(200).json(workout)
}


// create a new work out
const createWorkout = async(req,res)=> {
    const {title,load,reps} = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }

    if(!load) {
        emptyFields.push('load')
    }

    if(!reps) {
        emptyFields.push('reps')
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please Fill In All The Feilds ', emptyFields})
    }

    try {
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

// DELETE A Workout
const deleteworkout = async(req,res) => {
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return  res.status(400).json({error: 'No such workout '})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout) {
        return res.status(400).json({error: 'No such workout '})
    }
    res.status(200).json(workout)

}

// UPDATE a single workout

// DELETE A Workout
const updateworkout = async(req,res) => {
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return  res.status(400).json({error: 'No such workout '})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    }) 

    if(!workout) {
        return res.status(400).json({error: 'No such workout '})
    }
    res.status(200).json(workout)

}

module.exports = {
    getworkouts,
    getworkout,
    createWorkout,
    deleteworkout,
    updateworkout
}