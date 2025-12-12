import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllTickets from "../Pages/AllTickets";
import DashboardLayout from "../Layouts/DashboardLayout";
import UserDashboard from "../Pages/UserDashboard";
import AdminDashboard from "../Pages/AdminDashboard";
import VendorDashboard from "../Pages/VendorDashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/all-tickets', element: <PrivateRoute><AllTickets></AllTickets></PrivateRoute> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            { index: true, element: <UserDashboard /> },
            { path: '/dashboard/admin', element: <AdminDashboard /> },
            { path: '/dashboard/vendor', element: <VendorDashboard /> }
        ]
    }
])

export default router;