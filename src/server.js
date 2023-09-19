const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { User, Thought, Reaction } = require('./src/models');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.use(bodyParser.json());

// Define your API routes

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Users routes
const userRoutes = require('./src/routes/user-routes');
app.use(userRoutes);

// Thoughts routes
const thoughtRoutes = require('./src/routes/thought-routes');
app.use(thoughtRoutes);

// Reactions routes
const reactionRoutes = require('./src/routes/reaction-routes');
app.use(reactionRoutes);

// Friends routes
const friendRoutes = require('./src/routes/friend-routes');
app.use(friendRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
