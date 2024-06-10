require('dotenv').config()
const express = require("express");
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



// Listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on the port " , process.env.PORT);
});


