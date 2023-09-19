const { Thought, User } = require('../models'); // Import the Thought and User models

const thoughtController = {
  // Controller function to get all thoughts
  getAllThoughts: async (req, res) => {
    try {
      // Implement logic to retrieve all thoughts from the database
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Controller function to get a thought by ID
  getThoughtById: async (req, res) => {
    try {
      const { thoughtId } = req.params;
      // Implement logic to retrieve a thought by ID from the database
      const thought = await Thought.findById(thoughtId);

      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      res.json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Controller function to create a new thought
  createThought: async (req, res) => {
    try {
      const { thoughtText, username, userId } = req.body;
      // Implement logic to create a new thought in the database
      const newThought = await Thought.create({ thoughtText, username });

      // Update the user's thoughts array with the new thought's ID
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $push: { thoughts: newThought._id } },
        { new: true }
      );

      res.status(201).json(newThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Controller function to update a thought by ID
  updateThought: async (req, res) => {
    try {
      const { thoughtId } = req.params;
      const { thoughtText } = req.body;
      // Implement logic to update a thought's information in the database
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        { thoughtText },
        { new: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      res.json(updatedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Controller function to delete a thought by ID
  deleteThought: async (req, res) => {
    try {
      const { thoughtId } = req.params;
      // Implement logic to delete a thought from the database
      const deletedThought = await Thought.findByIdAndDelete(thoughtId);

      if (!deletedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      // Remove the thought's ID from the user's thoughts array
      await User.findByIdAndUpdate(deletedThought.userId, {
        $pull: { thoughts: thoughtId },
      });

      res.json({ message: 'Thought deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = thoughtController;
