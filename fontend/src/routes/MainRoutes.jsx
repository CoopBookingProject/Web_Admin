import React from "react";
import { lazy } from "react";
import MainLayout from "../layout/MainLayout";

const LoginPage = lazy(() => import("../pages/auth/Login"));
const ForgotPasswordPage = lazy(() => import("../pages/auth/ForgotPassword")); // Import the ForgotPassword page component

const AdminRoutes = () => {
    return {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <LoginPage />,
            },
            {
                path: "/ForgotPassword", // Add the path for the ForgotPassword page
                element: <ForgotPasswordPage />, // Add the ForgotPassword page component
            },
        ],
    };
};

export default AdminRoutes;
