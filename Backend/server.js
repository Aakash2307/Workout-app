require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


// Invoking the function
const app = express();

//middleware
app.use(express.json())
app.use((req,res,next) =>{
  console.log(req.path,req.method)
  next()
})

// routes
app.use("/api/workouts",workoutRoutes)

// Connect to Database 
mongoose.connect(process.env.MONGO_URI )  // This is a different connection string kindly do not copy this string 
   .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to the database on port " , process.env.PORT);
    });

   })
   .catch((error) => {
    console.log(error)
   })

// Listen for requests



