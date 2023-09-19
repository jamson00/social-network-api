const router = require('express').Router();
const {
  addFriend,
  removeFriend,
} = require('../controllers/friend-controller');

// Define routes for friend management
router
  .route('/api/users/:userId/friends/:friendId')
  .post(addFriend) // Add a friend to a user's friend list
  .delete(removeFriend); // Remove a friend from a user's friend list

module.exports = router;
