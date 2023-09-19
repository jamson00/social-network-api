const router = require('express').Router();
const {
  createReaction,
  removeReaction,
} = require('../controllers/reaction-controller');

// Define routes for reaction management
router
  .route('/api/thoughts/:thoughtId/reactions')
  .post(createReaction) // Create a new reaction for a thought
  .delete(removeReaction); // Remove a reaction from a thought

module.exports = router;
