import React from 'react'
import { Navigate, Outlet } from 'react-router';

const useAuth = () => {
    const isLogin = localStorage.getItem("isLogin");
    return isLogin;
}

const ProtectedRoute = () => {
    const isAuth = useAuth();

    return (
        isAuth ? <Outlet /> : <Navigate to="/login" />
    )
}

export default ProtectedRoute
