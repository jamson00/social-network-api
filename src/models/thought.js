const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
      reactionId: mongoose.Schema.Types.ObjectId,
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

// Create a virtual field for reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Define a custom date formatting function
function dateFormat(timestamp) {
  // Implement your date formatting logic here
  // You can use a date library like 'moment' for this purpose
  return timestamp;
}

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
