const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Create a comment
router.post('/comments', async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get comments for a specific recipe
router.get('/comments/:recipeId', async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { recipe_id: req.params.recipeId },
    });
    res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update a comment
router.put('/comments/:commentId', async (req, res) => {
  try {
    const updatedComment = await Comment.update(req.body, {
      where: { id: req.params.commentId },
    });
    res.status(200).json(updatedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a comment
router.delete('/comments/:commentId', async (req, res) => {
  try {
    await Comment.destroy({
      where: { id: req.params.commentId },
    });
    res.status(204).end(); // 204 No Content
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;