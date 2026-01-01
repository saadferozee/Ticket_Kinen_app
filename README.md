# TicketKinen – Travel Ticket Booking Platform

A comprehensive full-stack ticket booking application with multi-role access (User, Vendor, Admin), secure authentication, Stripe payment, and dynamic ticket management.

---

## 🌐 Live Demo

Client (Frontend): https://ticketkinen-app.web.app

Server (Backend): https://ticket-kinen-app.vercel.app

---

## 📂 GitHub Repositories

Client Repo: https://github.com/saadferozee/Ticket_Kinen_app

Server Repo: https://github.com/saadferozee/Ticket_Kinen_app_backend

---

## 🧩 Overview

TicketKinen is built to provide a real-world travel ticket booking solution with:

- Secure Firebase authentication (email/password + Google sign-in)
- Role-based dashboards with dedicated workflows
- Admin ticket and user management
- Vendor ticket posting and approval system
- User booking, payment, and history
- Responsive design with light/dark themes

This project emphasizes clean UI/UX, secure backend APIs, deployment readiness, and industry-standard development practices.

---

## 🚀 Key Features
### 🔐 Authentication & User System

- Firebase Auth with Email/Password and Google login
- Password strength enforcement (uppercase, lowercase, min length)
- Role based token protection (JWT/Firebase tokens)
- Persistent auth state and protected routing

---

## 🪪 Main Pages (Client)

#### Home:
  - Hero
  - Admin-advertised tickets
  - Latest tickets
  - Tips & About sections

#### All Tickets: 
  - Admin-approved tickets with pagination

#### Ticket Details: 
  - Info
  - countdown
  - booking modal

#### Auth: 
  - Login
  - Registration
  - validation

#### Error Page: 
  - For unknown routes

---

## 👤 Dashboards

### 📍 User Dashboard
  - Profile overview
  - My Booked Tickets
    - status
    - countdown
    - payment integration
  - Transaction history table

### 📍 Vendor Dashboard

  - Profile overview
  - Add Ticket form
  - My Added Tickets with edit/delete
  - Requested Bookings (Accept/Reject)
  - Revenue charts

### 📍 Admin Dashboard

  - Admin Profile
  - Manage Tickets (Approve/Reject)
  - Manage Users
    - Assign roles
    - Mark fraud
  - Advertise Tickets (max 6 at a time)

---

## 💳 Payments

- Stripe payment integration
- Dynamic price calculation
- Payment status tracking
- Auto decrement ticket quantity

---

## 📦 Tech Stack

### Frontend:
  - React
  - Vite
  - Tailwind CSS
  - Firebase Auth
  - React Router
  - Context API
  - Stripe.js

### Backend:
  - Node.js
  - Express.js
  - MongoDB Atlas
  - JWT / Firebase token protection
  - dotenv, CORS

### Deployment:
  - Firebase Hosting (Frontend)
  - Vercel (Backend)

---

## 📁 Project File Structure (Client)
```bash
Ticket_Kinen_app_frontend/
│
├── .firebase/
├── dist/
├── node_modules/
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── Components/
│   │   ├── AboutSection.jsx
│   │   ├── AddSection.jsx
│   │   ├── AdminAddTicketCard.jsx
│   │   ├── AdvertiseTicketCard.jsx
│   │   ├── BannerSection.jsx
│   │   ├── CountdownTimer.jsx
│   │   ├── DarkThemeToggle.jsx
│   │   ├── LatestTicketSection.jsx
│   │   ├── Loading.jsx
│   │   ├── OverviewCard.jsx
│   │   ├── RevenueCard.jsx
│   │   ├── TicketChart.jsx
│   │   ├── TravelPartnerSection.jsx
│   │   ├── UserTicketCard.jsx
│   │   └── VendorTicketCard.jsx
│   │
│   ├── Contexts/
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── Elements/
│   │   ├── DashboardSidebar.jsx
│   │   ├── Footer.jsx
│   │   ├── InfiniteLayer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ReactTooltip.jsx
│   │   └── TravelBus.jsx
│   │
│   ├── Firebase/
│   │   └── firebase.init.js
│   │
│   ├── Functions/
│   │   └── isTimeUp.jsx
│   │
│   ├── Hooks/
│   │   ├── useAxios.jsx
│   │   └── useAxiosSecure.jsx
│   │
│   ├── Layouts/
│   │   └── Root.jsx
│   │
│   ├── Pages/
│   │   ├── Error/
│   │   │   ├── Error404.css
│   │   │   └── Error404.jsx
│   │   │
│   │   ├── AddTicket.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── AdvertiseTickets.jsx
│   │   ├── AllTickets.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ForgetPass.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── ManageTickets.jsx
│   │   ├── ManageUsers.jsx
│   │   ├── MyAddedTickets.jsx
│   │   ├── MyBookedTickets.jsx
│   │   ├── MyProfile.jsx
│   │   ├── PaymentCancelled.jsx
│   │   ├── PaymentSuccess.jsx
│   │   ├── Register.jsx
│   │   ├── RequestedBookings.jsx
│   │   ├── RevenueOverview.jsx
│   │   ├── TicketDetails.jsx
│   │   ├── TransactionHistory.jsx
│   │   └── VendorDashboard.jsx
│   │
│   ├── Providers/
│   │   ├── AuthProvider.jsx
│   │   └── ThemeProvider.jsx
│   │
│   ├── Routes/
│   │   ├── PrivateRoute.jsx
│   │   └── Routes.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env.local
├── .firebaserc
├── .gitignore
├── eslint.config.js
├── firebase.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

```
---

## 🛠 Installation
### Frontend
```
git clone https://github.com/saadferozee/PH_assignment_10.git
cd PH_assignment_10
npm install
npm run dev
```
### Backend
```
git clone https://github.com/saadferozee/PH_assignment_10_server.git
cd PH_assignment_10_server
npm install
npm run start
```

---

## 🔑 Environment Variables

### Client (.env)
```
VITE_FIREBASE_API_KEY=yourKey
VITE_FIREBASE_AUTH_DOMAIN=yourDomain
VITE_FIREBASE_PROJECT_ID=yourProjectID
VITE_STRIPE_KEY=yourStripeKey
```

### Server (.env)
```
DB_USER=yourUser
DB_PASS=yourPassword
JWT_SECRET=yourSecret
STRIPE_SECRET_KEY=yourStripeSecret
```

---

## ✨ Author

### **Saad Ferozee**

- GitHub: https://github.com/saadferozee
- LinkedIn: https://www.linkedin.com/in/saadferozee/











