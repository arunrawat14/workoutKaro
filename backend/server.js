require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

//jliMR25k3fLQBBRf


const workoutRoutes = require('./routes/workouts')


// express app
const app = express()

// middlewhere

// this is done to attach post data to req 

app.use(express.json());

// pehle middle where chalao check karo kya request hai use ka mtlb h hr baar chalega or agar chl gya toh next isliye
//taaki next me jaaye verna ni jata ye next me 

app.use((req,res,next)=> {
    console.log(req.path, req.method);
    next();
})


// routes
app.use('/api/workouts', workoutRoutes)


mongoose.connect(process.env.MONG_URI)
.then(()=> {
        // listen for requeust
        app.listen(process.env.PORT, () => {
        console.log(' connected to db & listening at ', process.env.PORT);
    })
}) 
.catch((error)=> {
    console.log(error);
})


