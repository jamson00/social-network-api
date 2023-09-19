const { User } = require('../models'); // Import the User model

const userController = {
  // Controller function to get all users
  getAllUsers: async (req, res) => {
    try {
      // Implement logic to retrieve all users from the database
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Controller function to get a user by ID
  getUserById: async (req, res) => {
    try {
      const { userId } = req.params;
      // Implement logic to retrieve a user by ID from the database
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Controller function to create a new user
  createUser: async (req, res) => {
    try {
      const { username, email } = req.body;
      // Implement logic to create a new user in the database
      const newUser = await User.create({ username, email });

      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Controller function to update a user by ID
  updateUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const { username, email } = req.body;
      // Implement logic to update a user's information in the database
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { username, email },
        { new: true } // Return the updated user
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

  // Controller function to delete a user by ID
  deleteUser: async (req, res) => {
    try {
      const { userId } = req.params;
      // Implement logic to delete a user from the database
      const deletedUser = await User.findByIdAndDelete(userId);

      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = userController;
