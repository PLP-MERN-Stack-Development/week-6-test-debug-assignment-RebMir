# 🐞 BugTracker

A full-stack **Bug Tracking Application** built with the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring **unit, integration, and component testing**, as well as **robust debugging and error handling** practices.

---

## 📌 Project Overview

This application allows users to:

- Report bugs using a simple form.
- View all reported bugs.
- Update bug status (`Open`, `In Progress`, `Resolved`).
- Delete bugs.
- Includes automated tests (unit, integration, component).
- Implements debugging tools and error boundaries for reliability.

---

## 🛠️ Technologies Used

- **Frontend:** React, Vite, Axios, React Testing Library, Jest
- **Backend:** Express, Node.js, MongoDB, Mongoose, Supertest, Jest
- **Testing:** Jest, Supertest, React Testing Library
- **Debugging:** Chrome DevTools, Node.js Inspector, Console logs, Error Boundaries

---

## 📁 Project Structure



## Project Structure

```
BugTracker/
├── client/                 # React front-end
│   ├── src/                # React source code
│   │   ├── components/     # React components
│   │   ├── tests/          # Client-side tests
│   │   │   ├── unit/       # Unit tests
│   │   │   └── integration/ # Integration tests
│   │   └── App.jsx         # Main application component
│   └── cypress/            # End-to-end tests
├── server/                 # Express.js back-end
│   ├── src/                # Server source code
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Custom middleware
│   └── tests/              # Server-side tests
│       ├── unit/           # Unit tests
│       └── integration/    # Integration tests
├── jest.config.js          # Jest configuration
└── package.json            # Project dependencies
|──.gitignore
```


---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js ≥ 18
- pnpm (preferred) or npm
- MongoDB Atlas or Local DB URI

### 📥 Installation

Clone the repository:

```
git clone [https://github.com/YOUR_USERNAME/mern-bug-tracker.git](https://github.com/PLP-MERN-Stack-Development/week-6-test-debug-assignment-RebMir.git)
cd week-6-test-debug-assignment-RebMir
```

Install dependencies:
```
# Backend
cd server
pnpm install

# Frontend
cd ../client
pnpm install
```

# 🧠 Testing Approach
## Backend
- Unit tests: Validation helpers and controller logic.

- Integration tests: Full API flow using Supertest.

- Mocking: jest.mock() for isolating MongoDB logic.

## Frontend
- Component tests: Button, form validation, state rendering.

- Integration tests: Mocking API calls, UI updates.

- Edge case tests: Empty states, loading, error messages.

## 🐛 Debugging Tools & Techniques
```
### Tool	                        ### Usage
console.log()	                Tracing values in frontend/backend
Chrome DevTools	              Inspecting React components & requests
Node.js Inspector	            Debugging backend line-by-line
Error Boundaries	            Capturing runtime UI errors
