# 💬 MERN Chat Application

A real-time full-stack chat application built using the **MERN stack** (MongoDB, Express, React, Node.js) with **Socket.io** for real-time communication.

## ✨ Features

- 🔐 Authentication & Authorization using **JWT**
- 👾 Real-time messaging powered by **Socket.io**
- 🟢 Online user presence status
- ☁️ Cloudinary image upload support
- ✅ Error handling on both client and server
- 🔐 Passwords hashed using **bcryptjs**
- 🍪 JWT stored in HTTP-only cookies for session management
- ⚡ Modern UI with **React**, **Lucide Icons**, and **Zustand** for state management

---

## 🚀 Tech Stack

### 🖥️ Frontend
- **React**

### 🌐 Backend
- **Node.js**
- **Express**

### 🗄️ Database
- **MongoDB**
- **Cloudinary** (for image storage)

---

## 🛠️ Libraries

### Frontend Libraries
- **React Router DOM** (for navigation and routing between different pages)
- **Axios** (for making HTTP requests to the backend)
- **Zustand** (for state management and storing application data globally)
- **Lucide React** (for providing icons to enhance UI)
- **React Hot Toast** (for showing toast notifications on the client)

### Backend Libraries
- **Mongoose** (for MongoDB interactions)
- **Socket.io** (for real-time messaging)
- **dotenv** (for environment variables)
- **jsonwebtoken** (for JWT authentication)
- **bcryptjs** (for password hashing)
- **cookie-parser** (for handling cookies)
- **cloudinary** (for image uploading)
- **cors** (for Cross-Origin Resource Sharing)

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/your-chat-app.git
cd your-chat-app
```

### 2. Install server dependencies

```bash
cd server
npm install
```

### 3. Install client dependencies

```bash
cd ../client
npm install
```

### 4. Setup environment variables

Create a `.env` file in the `/server` directory and add:

```env
MONGODB_URI=your_mongo_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
```

---

## ▶️ Run the application

### Start the backend server

```bash
cd server
npm run dev
```

### Start the frontend client

```bash
cd client
npm start
```

---

## 📸 Screenshots

### Signup Page
![Signup Page](https://github.com/DINESHKARTHIKN/Chat_App/blob/main/Images/Screenshot%202025-05-06%20184532.png?raw=true)

### Login Page
![Login Page](https://github.com/DINESHKARTHIKN/Chat_App/blob/main/Images/Screenshot%202025-05-06%20184543.png?raw=true)

### Profile Page
![Profile Page](https://github.com/DINESHKARTHIKN/Chat_App/blob/main/Images/Screenshot%202025-05-06%20185303.png?raw=true)

### Chat Page
![Chat Page](https://github.com/DINESHKARTHIKN/Chat_App/blob/main/Images/Screenshot%202025-05-06%20185723.png?raw=true)


---

## 📂 Folder Structure

```
client/       # React frontend
server/       # Node.js + Express backend
```

---

## 🙌 Acknowledgements

This project uses:

- [Cloudinary](https://cloudinary.com/)
- [Socket.io](https://socket.io/)
- [Lucide Icons](https://lucide.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)



## 🤝 Contributing

Contributions are welcome! Fork the repo and create a pull request.
