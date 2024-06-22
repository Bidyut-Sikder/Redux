import React from 'react';
import { usePrivateAuth } from '../hooks/usePrivateAuth';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const isLogedIn = usePrivateAuth()

    return !isLogedIn ? children : <Navigate to="/inbox" />;
};

export default PublicRoute;