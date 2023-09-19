const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require('../controllers/thought-controller');

// Define routes for thought management
router
  .route('/api/thoughts')
  .get(getAllThoughts) // Get all thoughts
  .post(createThought); // Create a new thought

router
  .route('/api/thoughts/:thoughtId')
  .get(getThoughtById) // Get a thought by ID
  .put(updateThought) // Update a thought by ID
  .delete(deleteThought); // Delete a thought by ID

module.exports = router;
