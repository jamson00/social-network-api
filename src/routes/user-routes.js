const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user-controller');

// Define routes for user management
router
  .route('/api/users')
  .get(getAllUsers) // Get all users
  .post(createUser); // Create a new user

router
  .route('/api/users/:userId')
  .get(getUserById) // Get a user by ID
  .put(updateUser) // Update a user by ID
  .delete(deleteUser); // Delete a user by ID

module.exports = router;
