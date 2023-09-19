const { User } = require('../models'); // Import the User model

const friendController = {
  // Controller function to add a friend to a user's friend list
  addFriend: async (req, res) => {
    try {
      const { userId, friendId } = req.params;
      // Implement logic to add the friend to the user's friend list in the database
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $push: { friends: friendId } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Controller function to remove a friend from a user's friend list
  removeFriend: async (req, res) => {
    try {
      const { userId, friendId } = req.params;
      // Implement logic to remove the friend from the user's friend list in the database
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $pull: { friends: friendId } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = friendController;
