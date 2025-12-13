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
            { path: '/all-tickets', element: <PrivateRoute><AllTickets></AllTickets></PrivateRoute> },
            { path: '/login', element: <Login /> },
            { path: '/forget-pass/:email', element: <ForgetPass /> },
            { path: '/register', element: <Register /> }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            { path: '/dashboard/home', element: <Dashboard /> },
            { path: '/dashboard/my-profile', element: <MyProfile /> },
            // Admin Routes
            { path: '/dashboard/manage-tickets', element: <ManageTickets /> },
            { path: '/dashboard/manage-users', element: <ManageUsers /> },
            { path: '/dashboard/advertise-tickets', element: <AdvertiseTickets /> },
            // Vendor Routes
            { path: '/dashboard/add-ticket', element: <AddTicket /> },
            { path: '/dashboard/my-added-tickets', element: <MyAddedTickets /> },
            { path: '/dashboard/requested-bookings', element: <RequestedBookings /> },
            { path: '/dashboard/revenue-overview', element: <RevenueOverview /> },
            // User Routes
            { path: '/dashboard/my-booked-tickets', element: <MyBookedTickets /> },
            { path: '/dashboard/transaction-history', element: <TransactionHistory /> }
        ]
    }
])

export default router;