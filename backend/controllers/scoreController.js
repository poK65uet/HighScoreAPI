const asyncHandler = require('express-async-handler');
const Score = require('../models/scoreModel.js');

// @desc    Get scores
// @route   GET /api/scores
// @access  Public
const getScores = asyncHandler(async (req, res) => {
    const scores = await Score.find();
    res.status(200).json(scores);
});

// @desc    Set score
// @route   POST /api/scores
// @access  Score
const setScore = asyncHandler(async (req, res) => {
    if(!req.body.score || !req.body.name) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    const score = await Score.create({
        name: req.body.name,
        score: req.body.score,
    });

    res.status(200).json(score);
})

// // @desc    Update goal
// // @route   PUT /api/goals/:id
// // @access  Private
// const updateScore = asyncHandler(async (req, res) => {
//     const score = await Score.findById((req.params.id));
    
//     if(!score) {
//         res.status(400);
//         throw new Error('Score not found');
//     }

//     // const updateGoal = await goal.update(req.body, {new: true});
//     const updateScore = await Score.findByIdAndUpdate(req.params.id, req.body, {new: true});

//     res.status(200).json(updateScore);
// })

// // @desc    Delete goal
// // @route   DELETE /api/goals/:id
// // @access  Private
// const deleteScore = asyncHandler(async (req, res) => {
//     const score = await Score.findById((req.params.id));
    
//     if(!score) {
//         res.status(400);
//         throw new Error('Goal not found');
//     }

//     await score.remove();

//     res.status(200).json({ id: req.params.id });
// })

module.exports = {
    getScores,
    setScore,
    // updateScore,
    // deleteScore
}