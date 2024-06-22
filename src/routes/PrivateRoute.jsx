import React from 'react';
import { usePrivateAuth } from '../hooks/usePrivateAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const isLogedIn = usePrivateAuth()

    return isLogedIn ? children : <Navigate to={'/'} />;
};

export default PrivateRoute;