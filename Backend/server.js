const express = require("express");
// Invoking the function
const app = express();

//middleware
app.use((req,res,next) =>{
  console.log(req.path,req.method)
  next()
})

// routes
app.get("/" ,(req,res) =>{
    res.json({mssg : 'Welcome to the app'})
})

// Listen for requests
app.listen(4000, () => {
  console.log("listening on the port 4000");
});

