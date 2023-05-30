import React from "react";
import { lazy } from "react";
import MainLayout from "../layout/MainLayout";

const LoginPage = lazy(() => import("../pages/auth/Login"));


const AdminRoutes = () => {
    return {
        path: "/",
        element: <MainLayout />,
        children: [
  
            {
                path: "/",
                element: <LoginPage />,
            },
        ],
    };
};

export default AdminRoutes;