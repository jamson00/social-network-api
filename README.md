# Social Network API

A simple RESTful API for a social networking web application. This API allows users to share thoughts, react to friends' thoughts, and manage their friend list. It uses Express.js for routing and MongoDB with Mongoose for data storage.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this API, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/social-network-api.git


Certainly! Here's a brief README template for your social network API project. You can customize it with additional information as needed:

markdown
Copy code
# Social Network API

A simple RESTful API for a social networking web application. This API allows users to share thoughts, react to friends' thoughts, and manage their friend list. It uses Express.js for routing and MongoDB with Mongoose for data storage.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this API, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/social-network-api.git

## Install dependencies:


cd social-network-api
npm install
Start the server:


npm start
The server will be running on http://localhost:3000.

## Usage
This API provides endpoints for creating and managing users, thoughts, reactions, and friend lists. You can interact with the API using tools like Insomnia or Postman.

## API Endpoints
GET /api/users: Get all users.
GET /api/users/:userId: Get a single user by ID.
POST /api/users: Create a new user.
PUT /api/users/:userId: Update a user by ID.
DELETE /api/users/:userId: Delete a user by ID.
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.
GET /api/thoughts: Get all thoughts.
GET /api/thoughts/:thoughtId: Get a single thought by ID.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:thoughtId: Update a thought by ID.
DELETE /api/thoughts/:thoughtId: Delete a thought by ID.
POST /api/thoughts/:thoughtId/reactions: Create a reaction for a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.

## Dependencies
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
Moment.js: Parse, validate, manipulate, and display dates and times in JavaScript.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow our contribution guidelines.

## License
This project is licensed under the ISC License