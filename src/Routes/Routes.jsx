import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllTickets from "../Pages/AllTickets";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ForgetPass from "../Pages/ForgetPass";
import MyProfile from "../Pages/MyProfile";
import ManageTickets from "../Pages/ManageTickets";
import ManageUsers from "../Pages/ManageUsers";
import AdvertiseTickets from "../Pages/AdvertiseTickets";
import AddTicket from "../Pages/AddTicket";
import MyAddedTickets from "../Pages/MyAddedTickets";
import RequestedBookings from "../Pages/RequestedBookings";
import RevenueOverview from "../Pages/RevenueOverview";
import MyBookedTickets from "../Pages/MyBookedTickets";
import TransactionHistory from "../Pages/TransactionHistory";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/all-tickets', element: <PrivateRoute authorization={'all-user'}><AllTickets></AllTickets></PrivateRoute> },
            { path: '/login', element: <Login /> },
            { path: '/forget-pass/:email', element: <ForgetPass /> },
            { path: '/register', element: <Register /> }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute authorization={'all-user'}><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'home', element: <Dashboard /> },
            { path: 'my-profile', element: <MyProfile /> },
            // Admin Routes
            { path: 'manage-tickets', element: <PrivateRoute authorization={'admin'}><ManageTickets /></PrivateRoute> },
            { path: 'manage-users', element: <PrivateRoute authorization={'admin'}><ManageUsers /></PrivateRoute> },
            { path: 'advertise-tickets', element: <PrivateRoute authorization={'admin'}><AdvertiseTickets /></PrivateRoute> },
            // Vendor Routes
            { path: 'add-ticket', element: <PrivateRoute authorization={'vendor'}><AddTicket /></PrivateRoute> },
            { path: 'my-added-tickets', element: <PrivateRoute authorization={'vendor'}><MyAddedTickets /></PrivateRoute> },
            { path: 'requested-bookings', element: <PrivateRoute authorization={'vendor'}><RequestedBookings /></PrivateRoute> },
            { path: 'revenue-overview', element: <PrivateRoute authorization={'vendor'}><RevenueOverview /></PrivateRoute> },
            // User Routes
            { path: 'my-booked-tickets', element: <PrivateRoute authorization={'user'}><MyBookedTickets /></PrivateRoute> },
            { path: 'transaction-history', element: <PrivateRoute authorization={'user'}><TransactionHistory /></PrivateRoute> }
        ]
    }
])

export default router;