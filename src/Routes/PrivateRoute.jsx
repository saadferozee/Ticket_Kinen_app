import React, { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute = ({ children, authorization }) => {

    const location = useLocation();

    // if (authLoading || roleLoading) {
    //     return <Loading viewHeight={70} color={'#556B2F'} />;
    // }

    // if (user && (authorization === role || authorization === 'all-user')) {
    //     return children;
    // }

    // return <Navigate to="/login" state={location.pathname} />;

    const { user, role, authLoading, roleLoading } = useContext(AuthContext);
    console.log(user, role, authLoading, roleLoading);

    if (authLoading || roleLoading) {
        return <Loading viewHeight={70} color="#556B2F" />;
    }

    if (!user) {
        return <Navigate to="/login" state={location.pathname} />;
    }

    if (authorization === 'all-user') {
        return children;
    }

    if (role === authorization) {
        return children;
    }

    return <Navigate to="/login" replace />;
};

export default PrivateRoute;