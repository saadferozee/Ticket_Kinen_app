import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
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
        element:<DashboardLayout></DashboardLayout>,
        children: [
            { path: '/dashboard/home', element: <PrivateRoute authorization={'all-user'}><Dashboard /></PrivateRoute> },
            { path: '/dashboard/my-profile', element: <PrivateRoute authorization={'all-user'}><MyProfile /></PrivateRoute> },
            // Admin Routes
            { path: '/dashboard/manage-tickets', element: <PrivateRoute authorization={'admin'}><ManageTickets /></PrivateRoute> },
            { path: '/dashboard/manage-users', element: <PrivateRoute authorization={'admin'}><ManageUsers /></PrivateRoute> },
            { path: '/dashboard/advertise-tickets', element: <PrivateRoute authorization={'admin'}><AdvertiseTickets /></PrivateRoute> },
            // Vendor Routes
            { path: '/dashboard/add-ticket', element: <PrivateRoute authorization={'vendor'}><AddTicket /></PrivateRoute> },
            { path: '/dashboard/my-added-tickets', element: <PrivateRoute authorization={'vendor'}><MyAddedTickets /></PrivateRoute> },
            { path: '/dashboard/requested-bookings', element: <PrivateRoute authorization={'vendor'}><RequestedBookings /></PrivateRoute> },
            { path: '/dashboard/revenue-overview', element: <PrivateRoute authorization={'vendor'}><RevenueOverview /></PrivateRoute> },
            // User Routes
            { path: '/dashboard/my-booked-tickets', element: <PrivateRoute authorization={'user'}><MyBookedTickets /></PrivateRoute> },
            { path: '/dashboard/transaction-history', element: <PrivateRoute authorization={'user'}><TransactionHistory /></PrivateRoute> }
        ]
    }
])

export default router;