const express = require("express");
const router = express.Router();
const {
  getScores,
  setScore,
  // updateScore,
  // deleteScore,
} = require("../controllers/scoreController.js");

router.route("/").get(getScores).post(setScore);

// router.route("/:id").put(updateScore).delete(deleteScore);

// router.get('/', getGoals);

// router.post('/', setGoal);

// router.put('/:id', updateGoal);

// router.delete('/:id', deleteGoal);

module.exports = router;
