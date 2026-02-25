# Customer Relationship Management (CRM) application - MERN

A Customer Relationship Management (CRM) application using the MERN stack (MongoDB, Express.js, React.js, Node.js).

This project demonstrates full-stack development skills including authentication, database connectivity, API development, frontend integration, and deployment.

## screen recording 
- https://drive.google.com/drive/folders/1D15L7bqu6PSuJG97QHDM-1Gri-FqiGCF?usp=sharing

## hostedLink 
- frontend - https://mern-integration-eela.vercel.app/
- backend - https://mern-integration-olive.vercel.app/

# 🚀 Project Overview

- The CRM application allows users to:

- - Register and log in securely
- - Manage customer records
- - Perform full CRUD operations
- - Experience a responsive user interface
- - Work with a fully integrated MERN stack architecture

# 🛠️ Tech Stack

## Frontend

- React(vite)
- Tailwind css
- Axios
- React Router DOM
- React Icons


## Backend

- Node.js
- Express.js
- MongoDB(Mongoose)
- JWT (Authentication)
- bcrypt
- CORS

## 🔐 Features Implemented

✅ User Authentication

User Registration
User Login
JWT-based authentication
Protected routes

✅ CRM Functionality

Add new customers
View customer list
Update customer details
Delete customers

✅ Database Connectivity

MongoDB connection using Mongoose
Customer schema
User schema

✅ Error Handling & Validation

Input validation
Proper error responses
Authentication middleware

# ⚙️ Installation & Setup

1️⃣ Clone the Repository

cd crm-mern-integration

2️⃣ Install Dependencies

- Backend
cd server
npm install

- Frontend
cd ../client
npm install
3️⃣ Configure Environment Variables

🔹 Backend (.env inside /backend)
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000
🔹 Frontend (.env inside /frontend/crmsystem)

Since this project uses Vite, environment variables must start with VITE_.

VITE_API_URL=http://localhost:4000

4️⃣ Run the Application
- Start Backend
cd server
npm run dev

- Start Frontend
cd client
npm run dev

# 🔗 API Endpoints
## Authentication

- POST /api/register
- POST /api/login

## Customers

- GET /api/customers
- POST /api/customers
- PUT /api/customers/:id
- DELETE /api/customers/:id

## 🧪 Testing

- API tested using Postman
- Frontend tested manually through browser

## 🌍 Deployment

🚀 Deployment (Vercel)

This project is configured for easy deployment on Vercel.

1️⃣ Push to GitHub

Push your complete project (both client and server folders) to a GitHub repository.

2️⃣ Deploy the Backend

- Go to Vercel Dashboard → Click Add New Project
- Import your GitHub repository
- Set the Root Directory to: server
- Add the following Environment Variables in Vercel:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000

- Click Deploy
- Vercel will automatically detect the configuration and use the vercel.json file (if provided).
- After deployment, you will get a backend URL like: https://your-backend-name.vercel.app

3️⃣ Deploy the Frontend

- Create another New Project in Vercel
- Import the same GitHub repository
- Set the Root Directory to:
- client
- Add the following environment variable:

VITE_API_URL=https://your-backend-name.vercel.app

- Click Deploy


# mern_integration
