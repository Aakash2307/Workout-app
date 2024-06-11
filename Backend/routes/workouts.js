const express = require("express");
// const mongoose = require('mongoose')

const {
  getworkouts,
  getworkout,
  createworkout,
  deleteworkout,
  updateworkout,
  // telling the functions that are actually required
} = require("../Controllers/WorkoutController");
const router = express.Router();

// Get all the workout
router.get("/", getworkouts);

// get a single workout
router.get("/:id", getworkout);

// POST a new workout
router.post("/", createworkout);

// DELETE a workout
router.delete("/:id", deleteworkout);

// UPDATE a workout
router.patch("/:id", updateworkout);

module.exports = router;
