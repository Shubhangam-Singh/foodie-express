# 🍕 Foodie Express

[![Live Demo](https://img.shields.io/badge/Demo-Live-success)](https://foodie-express-frontend-gamma.vercel.app/)
[![Admin Panel](https://img.shields.io/badge/Admin-Live-blue)](https://foodie-express-xi.vercel.app/)
[![Backend API](https://img.shields.io/badge/API-Live-green)](https://foodie-express-production.up.railway.app/)

A modern, full-stack food delivery application built with the MERN stack, featuring user authentication, payment integration, and real-time order management.

**Developed by:** Shubhangam Singh

## 🚀 Live Demo

- **🌐 Frontend**: [https://foodie-express-frontend-gamma.vercel.app/](https://foodie-express-frontend-gamma.vercel.app/)
- **👨‍💼 Admin Panel**: [https://foodie-express-xi.vercel.app/](https://foodie-express-xi.vercel.app/)
- **🔧 Backend API**: [https://foodie-express-production.up.railway.app/](https://foodie-express-production.up.railway.app/)


## ✨ Features

### 🛒 User Features
- **User Authentication**: Secure signup/login with JWT tokens
- **Browse Menu**: Dynamic food categories with filtering
- **Shopping Cart**: Persistent cart across sessions with local storage
- **Secure Payments**: Integrated Stripe payment processing
- **Order Tracking**: Real-time order status updates
- **Responsive Design**: Mobile-first responsive UI
- **User Profile**: Order history and account management

### 👨‍💼 Admin Features
- **Dashboard**: Comprehensive admin panel for order management
- **Menu Management**: Add, edit, and remove food items
- **Order Management**: Update order status and track deliveries
- **File Upload**: Image upload for food items using Multer
- **Analytics**: Order statistics and revenue tracking

### 🔧 Technical Features
- **RESTful API**: Well-structured REST endpoints
- **Database Integration**: MongoDB with Mongoose ODM
- **File Handling**: Multer for image uploads
- **Security**: JWT authentication and password hashing with bcrypt
- **CORS Enabled**: Cross-origin resource sharing configured
- **Error Handling**: Comprehensive error handling and validation

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library for building user interfaces
- **React Router DOM** - Client-side routing
- **Context API** - State management
- **CSS3** - Styling with custom CSS
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **JWT** (jsonwebtoken) - Token-based authentication
- **bcrypt** - Password hashing
- **Validator** - Data validation

### Payment Processing
- **Stripe** - Payment gateway integration

### File Upload
- **Multer** - Middleware for handling multipart/form-data

### Deployment
- **Vercel** - Frontend and Admin panel hosting
- **Railway** - Backend API hosting
- **MongoDB Atlas** - Cloud database hosting

## 📁 Project Structure

foodie-express/
│
├── frontend/ # React frontend application
│ ├── public/ # Static files
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Page components
│ │ ├── context/ # Context API for state management
│ │ ├── assets/ # Images and icons
│ │ └── App.jsx # Main App component
│ └── package.json
│
├── admin/ # React admin panel
│ ├── src/
│ │ ├── components/ # Admin components
│ │ ├── pages/ # Admin pages
│ │ └── assets/ # Admin assets
│ └── package.json
│
├── backend/ # Node.js backend
│ ├── config/ # Database configuration
│ ├── controllers/ # Route controllers
│ ├── middleware/ # Custom middleware
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ ├── uploads/ # Uploaded files
│ ├── server.js # Main server file
│ └── package.json
│
└── README.md

text

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB account (Atlas recommended)
- Stripe account for payments
- Git

### 1. Clone the Repository
git clone https://github.com/Shubhangam-Singh/foodie-express.git
cd foodie-express

text

### 2. Backend Setup
cd backend
npm install

Create .env file (see Environment Variables section)
cp .env.example .env

Start the backend server
npm start

text

### 3. Frontend Setup
cd ../frontend
npm install

Create .env file
cp .env.example .env

Start the frontend development server
npm run dev

text

### 4. Admin Panel Setup
cd ../admin
npm install

Create .env file
cp .env.example .env

Start the admin development server
npm run dev

text

## 🔧 Environment Variables

### Backend (.env)
Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

JWT Secret
JWT_SECRET=your_jwt_secret_key_here

Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

Server Configuration
PORT=4000
NODE_ENV=development

Frontend URLs (for CORS)
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:3000

text

### Frontend (.env)
API Configuration
VITE_API_URL=http://localhost:4000

Stripe Publishable Key
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

text

### Admin (.env)
API Configuration
VITE_API_URL=http://localhost:4000

text

## 📡 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login

### Food Management
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (Admin)
- `POST /api/food/remove` - Remove food item (Admin)

### Cart Management
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get user cart

### Order Management
- `POST /api/order/place` - Place new order
- `POST /api/order/verify` - Verify payment
- `POST /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)

## 🌐 Deployment

### Backend (Railway)
1. Connect your GitHub repository to Railway
2. Set root directory to `backend`
3. Add environment variables in Railway dashboard
4. Deploy automatically on push

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set root directory to `frontend`
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Admin Panel (Vercel)
1. Create new Vercel project
2. Set root directory to `admin`
3. Add environment variables
4. Deploy

## 📱 Screenshots

### User Interface
- **Homepage**: Browse food categories and featured items
- **Menu Page**: Filter and search food items
- **Cart Page**: Review items and proceed to checkout
- **Payment**: Secure Stripe payment integration

### Admin Panel
- **Dashboard**: Overview of orders and statistics
- **Menu Management**: Add/edit food items with image upload
- **Order Management**: Track and update order status

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Shubhangam Singh**
- GitHub: [@Shubhangam-Singh](https://github.com/Shubhangam-Singh)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/shubhangam2005singh)

## 🙏 Acknowledgments

- Inspired by modern food delivery platforms
- Built following MERN stack best practices
- UI/UX inspired by contemporary web design trends
- Special thanks to the open-source community for the amazing tools and libraries

---

⭐ **Star this repository if you found it helpful!**

📧 **Questions or suggestions? Feel free to reach out!**

---

*Made with ❤️ by Shubhangam Singh*
