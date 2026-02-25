# 🚀 Customer Relationship Management (CRM) Application – MERN Stack

A full-stack **Customer Relationship Management (CRM)** application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.

This project demonstrates full-stack development skills including authentication, REST API development, database integration, protected routes, and deployment.

---

## 🔗 Live Demo

🎥 **Screen Recording**  
https://drive.google.com/drive/folders/1D15L7bqu6PSuJG97QHDM-1Gri-FqiGCF?usp=sharing

🌐 **Hosted Application**

- **Frontend:** https://mern-integration-eela.vercel.app/
- **Backend:** https://mern-integration-olive.vercel.app/

---

# 📌 Project Overview

This CRM application allows users to:

- 🔐 Register and log in securely
- 👥 Manage customer records
- ➕ Add new customers
- ✏️ Update customer details
- 🗑 Delete customers
- 📋 View a list of all customers
- 🔒 Access protected routes using JWT authentication
- 📱 Use a responsive and modern UI

---

# 🛠️ Tech Stack

## 🎨 Frontend

- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- React Icons

## ⚙️ Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- bcrypt
- CORS

---

# 🔐 Features Implemented

## ✅ User Authentication

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT-based Authentication
- Protected API Routes

## ✅ CRM Functionality

- Add new customers
- View customer list
- Update customer details
- Delete customers
- Full CRUD operations

## ✅ Database Integration

- MongoDB connection using Mongoose
- Customer Schema
- User Schema
- Secure data storage

## ✅ Error Handling & Validation

- Input validation
- Proper error responses
- Authentication middleware
- Protected endpoints

---

# ⚙️ Installation & Setup (Local Development)

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Vidhyashankarrr/mern_integration.git
cd mern_integration
```

---

## 2️⃣ Install Dependencies

### 🔹 Backend

```bash
cd server
npm install
```

### 🔹 Frontend

```bash
cd ../client
npm install
```

---

## 3️⃣ Configure Environment Variables

### 🔹 Backend (.env inside /server)

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000
```

### 🔹 Frontend (.env inside /client)

Since this project uses Vite, environment variables must start with `VITE_`.

```
VITE_API_URL=http://localhost:4000
```

---

## 4️⃣ Run the Application

### ▶️ Start Backend

```bash
cd server
npm run dev
```

### ▶️ Start Frontend

```bash
cd client
npm run dev
```

---

# 🔗 API Endpoints

## 🔐 Authentication

- `POST /api/register`
- `POST /api/login`

## 👥 Customers (Protected Routes)

- `GET /api/customers`
- `POST /api/customers`
- `PUT /api/customers/:id`
- `DELETE /api/customers/:id`

---

# 🧪 Testing

- API tested using Postman
- Frontend tested manually through browser
- JWT authentication verified for protected routes

---

# 🌍 Deployment (Vercel)

This project is configured for deployment on **Vercel**.

---

## 1️⃣ Deploy Backend

- Go to Vercel Dashboard → **Add New Project**
- Import your GitHub repository
- Set Root Directory to:

```
server
```

- Add Environment Variables:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000
```

- Click Deploy
- After deployment, you will receive a backend URL:

```
https://your-backend-name.vercel.app
```

---

## 2️⃣ Deploy Frontend

- Create another new project in Vercel
- Import the same GitHub repository
- Set Root Directory to:

```
client
```

- Add Environment Variable:

```
VITE_API_URL=https://your-backend-name.vercel.app
```

- Click Deploy

---

# 📂 Project Structure

```
mern_integration/
│
├── client/        # React Frontend
│
├── server/        # Express Backend
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   ├── config/
│   └── index.js
│
└── README.md
```

---

# 👨‍💻 Author

Developed as a full-stack MERN project to demonstrate:

- Authentication implementation
- Secure API development
- Database integration
- Deployment workflow
- End-to-end full-stack architecture

---

# 📄 License

This project is developed for educational and portfolio purposes.
