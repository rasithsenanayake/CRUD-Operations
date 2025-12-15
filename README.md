# CRUD-Operations

A basic CRUD (Create, Read, Update, Delete) operations website for managing user records. This application allows you to add, view, edit, and delete user information including name, email, and age.

## Features

- **Create**: Add new user records with name, email, and age
- **Read**: View all user records in a table format
- **Update**: Edit existing user information
- **Delete**: Remove user records from the database

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Bootstrap 5
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## Installation

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Setup

1. Clone the repository
```bash
git clone https://github.com/rasithsenanayake/CRUD-Operations.git
cd CRUD-Operations
```

2. Install client dependencies
```bash
cd client
npm install
```

3. Install server dependencies
```bash
cd ../server
npm install
```

## Running the Application

1. Start MongoDB service (if not already running)

2. Start the backend server
```bash
cd server
npm start
```
Server runs on `http://localhost:3001`

3. Start the frontend development server
```bash
cd client
npm run dev
```
Client runs on `http://localhost:5173`

## Usage

1. Navigate to `http://localhost:5173` in your browser
2. Click "Add +" to create a new user
3. Fill in the name, email, and age fields
4. View all users in the table on the home page
5. Click "Edit" to update user information
6. Click "Delete" to remove a user record

## Project Structure

```
CRUD-Operations/
├── client/          # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Users.jsx
│   │   ├── CreateUser.jsx
│   │   └── UpdateUser.jsx
│   └── package.json
└── server/          # Express backend
    ├── index.js
    ├── modals/
    │   └── Users.js
    └── package.json
```

## API Endpoints

- `POST /CreateUser` - Create a new user
- `GET /` - Get all users
- `GET /getUser/:id` - Get user by ID
- `PUT /updateUser/:id` - Update user by ID
- `DELETE /deleteUser/:id` - Delete user by ID

## License

This project is open source and available for educational purposes.