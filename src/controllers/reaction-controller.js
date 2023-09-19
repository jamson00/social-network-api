const { Thought } = require('../models'); // Import the Thought model

const reactionController = {
  // Controller function to create a new reaction for a thought
  createReaction: async (req, res) => {
    try {
      const { thoughtId } = req.params;
      const { reactionBody, username } = req.body;
      // Implement logic to create a new reaction for the thought in the database
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        {
          $push: {
            reactions: { reactionBody, username },
          },
        },
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

  // Controller function to remove a reaction from a thought
  removeReaction: async (req, res) => {
    try {
      const { thoughtId, reactionId } = req.params;
      // Implement logic to remove the reaction from the thought in the database
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        {
          $pull: {
            reactions: { _id: reactionId },
          },
        },
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
};

module.exports = reactionController;
