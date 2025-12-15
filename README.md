# Clueso Clone – Full Stack Assignment

This is a Clueso-inspired full stack web application built as part of a technical
assignment. The focus of this project is product thinking, clean architecture,
and realistic user experience rather than external AI integrations.

---

##  Features

### Authentication
- User Signup & Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes (Dashboard, Create Guide)

### Dashboard
- Welcome dashboard after login
- Analytics cards
- Global navbar across the app

### AI-Powered Insights (Simulated)
- AI insight generation with realistic delay (5–7 seconds)
- Loader and progress feedback
- Insight history tracking

### Guide Creation Flow
- Create step-based product guides
- Each guide is linked to the logged-in user
- Stored securely in MongoDB

### Backend Engineering
- MVC architecture (controllers, routes, models)
- Auth middleware for protected APIs
- Robust data storage with relationships

---

## Tech Stack

### Frontend
- React (Vite)
- React Router v6
- Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

##  Project Structure

clueso-clone/
├── frontend/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── services/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
└── README.md
---

## How to Run Locally

### Backend
```bash
cd backend
npm install
node server.js

### Frontend
cd frontend
npm install
npm run dev


