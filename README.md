# 🍕 Foodie Express

[![Live Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge)](https://foodie-express-frontend-gamma.vercel.app/)
[![Admin Panel](https://img.shields.io/badge/Admin-Live-blue?style=for-the-badge)](https://foodie-express-xi.vercel.app/)
[![Backend API](https://img.shields.io/badge/API-Live-green?style=for-the-badge)](https://foodie-express-production.up.railway.app/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

> A stunning, modern, full-stack food delivery application featuring **enterprise-grade UI/UX**, real-time order management, secure payments, and beautiful animations.

**Developed by:** [Shubhangam Singh](https://github.com/Shubhangam-Singh)

---

## 🌟 What's New in v2.0

| Category | Enhancements |
|----------|-------------|
| ✨ **UI/UX** | Complete redesign with modern gradients, animations, and glass morphism effects |
| 🎨 **Components** | Sticky nav, animated cards, interactive cart, loading states, empty states |
| 🚀 **Performance** | Optimized images, efficient state management, smooth scroll animations |
| ♿ **Accessibility** | WCAG 2.1 compliant, keyboard navigation, screen reader friendly |

---

## 🚀 Live Demo

| Platform | URL | Description |
|----------|-----|-------------|
| 🌐 **Frontend** | [foodie-express-frontend-gamma.vercel.app](https://foodie-express-frontend-gamma.vercel.app/) | Customer-facing website |
| 👨‍💼 **Admin Panel** | [foodie-express-xi.vercel.app](https://foodie-express-xi.vercel.app/) | Restaurant management dashboard |
| 🔧 **Backend API** | [foodie-express-production.up.railway.app](https://foodie-express-production.up.railway.app/) | RESTful API server |

---

## ✨ Features

### 🛒 Customer Features

| Feature | Description |
|---------|-------------|
| 🔐 **Smart Authentication** | Secure JWT-based signup/login with password hashing |
| 🍔 **Dynamic Menu** | Interactive food categories with smooth filtering |
| 🛒 **Persistent Cart** | Cart data saved in localStorage with quantity controls |
| 💳 **Secure Checkout** | Stripe integration with COD option |
| 📦 **Order Tracking** | Real-time order status with color-coded badges |
| 📱 **Responsive Design** | Mobile-first, works on all devices |
| 👤 **User Dashboard** | Order history and profile management |
| 🎨 **Modern UI** | Beautiful animations and hover effects |

### 👨‍💼 Admin Features

| Feature | Description |
|---------|-------------|
| 📊 **Analytics Dashboard** | Order statistics, revenue tracking, real-time metrics |
| ➕ **Menu Management** | Add, edit, delete food items with image upload |
| 📦 **Order Management** | Update order status, track deliveries |
| 🖼️ **Image Upload** | Multer-powered image handling with preview |
| 🎨 **Modern Admin UI** | Gradient cards, smooth animations, intuitive layout |
| 📈 **Quick Stats** | Total orders, processing, delivered counts |
| 🎯 **Status Updates** | Dropdown for order status changes |

### 🔧 Technical Features

- ✅ RESTful API with proper HTTP methods
- ✅ MongoDB with Mongoose ODM
- ✅ JWT Authentication with refresh tokens
- ✅ Password Hashing using bcrypt
- ✅ File Handling with Multer
- ✅ Error Boundaries for stability
- ✅ Input Validation on client and server
- ✅ CORS Configuration for cross-origin requests
- ✅ Environment Variables for security
- ✅ 404 Pages with beautiful error states

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|-----------|---------|
| **React 18.x** | UI library for building user interfaces |
| **React Router DOM v6** | Client-side routing |
| **Context API** | State management |
| **CSS3** | Styling with animations |
| **Axios** | HTTP client for API calls |
| **React Toastify** | Toast notifications |

### Backend

| Technology | Purpose |
|-----------|---------|
| **Node.js 18.x** | JavaScript runtime environment |
| **Express.js** | Web application framework |
| **MongoDB Atlas** | NoSQL cloud database |
| **Mongoose** | MongoDB object modeling |
| **JWT** | Token-based authentication |
| **bcrypt** | Password hashing |
| **Multer** | File upload handling |
| **Validator.js** | Data validation |

### Payment & Deployment

| Service | Purpose |
|---------|---------|
| **Stripe** | Payment processing |
| **Vercel** | Frontend & Admin hosting |
| **Railway** | Backend API hosting |
| **MongoDB Atlas** | Database hosting |

---

## 📁 Project Structure

foodie-express/
│
├── frontend/ # React Customer App
│ ├── public/ # Static assets
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ │ ├── Navbar/
│ │ │ ├── Header/
│ │ │ ├── ExploreMenu/
│ │ │ ├── FoodDisplay/
│ │ │ ├── FoodItem/
│ │ │ ├── Footer/
│ │ │ └── LoginPopup/
│ │ ├── pages/ # Page components
│ │ │ ├── Home/
│ │ │ ├── Cart/
│ │ │ ├── PlaceOrder/
│ │ │ ├── MyOrders/
│ │ │ └── Verify/
│ │ ├── Context/ # State management
│ │ ├── assets/ # Images & icons
│ │ ├── App.jsx # Main app
│ │ └── index.css # Global styles
│ └── package.json
│
├── admin/ # React Admin Panel
│ ├── src/
│ │ ├── components/ # Admin components
│ │ │ ├── Navbar/
│ │ │ └── Sidebar/
│ │ ├── pages/ # Admin pages
│ │ │ ├── Add/
│ │ │ ├── List/
│ │ │ └── Orders/
│ │ ├── assets/ # Admin assets
│ │ ├── App.jsx
│ │ └── index.css
│ └── package.json
│
├── backend/ # Node.js API
│ ├── config/ # Database config
│ ├── controllers/ # Business logic
│ │ ├── userController.js
│ │ ├── foodController.js
│ │ ├── cartController.js
│ │ └── orderController.js
│ ├── middleware/ # Custom middleware
│ │ └── auth.js
│ ├── models/ # Mongoose schemas
│ │ ├── userModel.js
│ │ ├── foodModel.js
│ │ └── orderModel.js
│ ├── routes/ # API routes
│ │ ├── userRoute.js
│ │ ├── foodRoute.js
│ │ ├── cartRoute.js
│ │ └── orderRoute.js
│ ├── uploads/ # Uploaded images
│ ├── server.js # Entry point
│ └── package.json
│
└── README.md # You are here!

text

---

## 🚀 Quick Start

### Prerequisites

- Node.js v14+ ([Download](https://nodejs.org/))
- MongoDB Atlas account ([Sign up](https://www.mongodb.com/cloud/atlas))
- Stripe account ([Sign up](https://stripe.com/))
- Git ([Download](https://git-scm.com/))

### Installation Steps

#### 1️⃣ Clone Repository

git clone https://github.com/Shubhangam-Singh/foodie-express.git
cd foodie-express

text

#### 2️⃣ Backend Setup

cd backend
npm install

Create .env file
cp .env.example .env

Edit .env with your credentials
Start server
npm start

text

Backend runs on `http://localhost:4000`

#### 3️⃣ Frontend Setup

cd frontend
npm install

Create .env file
cp .env.example .env

Edit .env with your API URL
Start dev server
npm run dev

text

Frontend runs on `http://localhost:5173`

#### 4️⃣ Admin Panel Setup

cd admin
npm install

Create .env file
cp .env.example .env

Edit .env with your API URL
Start dev server
npm run dev

text

Admin panel runs on `http://localhost:3000`

---

## 🔧 Environment Variables

### Backend `.env`

Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/foodie_express

JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

Server
PORT=4000
NODE_ENV=development

CORS Origins
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:3000

text

### Frontend `.env`

API Configuration
VITE_API_URL=http://localhost:4000

Stripe Publishable Key
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

text

### Admin `.env`

API Configuration
VITE_API_URL=http://localhost:4000

text

---

## 📡 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/user/register` | Register new user | ❌ |
| POST | `/api/user/login` | Login user | ❌ |

### Food Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/food/list` | Get all food items | ❌ |
| POST | `/api/food/add` | Add new food item | ✅ Admin |
| POST | `/api/food/remove` | Delete food item | ✅ Admin |

### Cart Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/cart/add` | Add item to cart | ✅ User |
| POST | `/api/cart/remove` | Remove item from cart | ✅ User |
| POST | `/api/cart/get` | Get user's cart | ✅ User |

### Order Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/order/place` | Place new order (Stripe) | ✅ User |
| POST | `/api/order/placecod` | Place order (COD) | ✅ User |
| POST | `/api/order/verify` | Verify Stripe payment | ✅ User |
| POST | `/api/order/userorders` | Get user's orders | ✅ User |
| GET | `/api/order/list` | Get all orders | ✅ Admin |
| POST | `/api/order/status` | Update order status | ✅ Admin |

---

## 🌐 Deployment Guide

### Deploy Backend on Railway

1. Sign up at [Railway](https://railway.app/)
2. Create new project → Deploy from GitHub
3. Select your repository and `backend` folder
4. Add environment variables in Railway dashboard
5. Deploy automatically on push

### Deploy Frontend on Vercel

1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Set root directory to `frontend`
4. Add environment variables
5. Deploy (auto-deploy on push)

### Deploy Admin Panel on Vercel

1. Create new Vercel project
2. Same repository, root directory = `admin`
3. Add environment variables
4. Deploy

---

## 🎨 UI/UX Highlights

### Design Elements

- ✨ **Gradient Backgrounds** - Subtle, animated gradients
- 🌊 **Smooth Animations** - Micro-interactions on hover
- 🎯 **Focus States** - Clear visual feedback
- 📱 **Mobile-First** - Responsive on all devices
- 🎨 **Color System** - Consistent brand colors
- 🖼️ **Image Optimization** - object-fit for perfect images
- 💫 **Loading States** - Beautiful spinners and skeletons
- 🎭 **Empty States** - Friendly messages when no data

### Accessibility Features

- ♿ WCAG 2.1 AA Compliant
- ⌨️ Keyboard Navigation
- 📢 Screen Reader Friendly
- 🎬 Reduced Motion Support
- 🎯 Focus Indicators

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch
git checkout -b feature/AmazingFeature

text
3. Commit your changes
git commit -m 'Add some AmazingFeature'

text
4. Push to the branch
git push origin feature/AmazingFeature

text
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

<div align="center">

### Shubhangam Singh

[![GitHub](https://img.shields.io/badge/GitHub-Shubhangam--Singh-181717?style=for-the-badge&logo=github)](https://github.com/Shubhangam-Singh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/shubhangam2005singh)

*Full-Stack Developer | MERN Stack Specialist | UI/UX Enthusiast*

</div>

---

## 🙏 Acknowledgments

- 🎨 UI/UX inspired by modern food delivery platforms
- 📚 Built following MERN stack best practices
- 🌟 Design trends from contemporary web applications
- 💙 Special thanks to the open-source community

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Shubhangam-Singh/foodie-express?style=social)
![GitHub forks](https://img.shields.io/github/forks/Shubhangam-Singh/foodie-express?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Shubhangam-Singh/foodie-express?style=social)

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

### 📧 Questions? Feel free to reach out!

### 💼 Open to collaboration and job opportunities

---

**Made with ❤️ and lots of ☕ by Shubhangam Singh**

</div>
