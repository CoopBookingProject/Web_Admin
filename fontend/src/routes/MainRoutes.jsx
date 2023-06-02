import React from "react";
import { lazy } from "react";
import MainLayout from "../layout/MainLayout";
import OtpPage from "../pages/auth/Otp";
import CreatenewpasswordPage from "../pages/auth/Createnewpassword"; // Import the Createnewpassword page component

const LoginPage = lazy(() => import("../pages/auth/Login"));
const ForgotPasswordPage = lazy(() => import("../pages/auth/ForgotPassword"));

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
        path: "/ForgotPassword",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/ForgotPassword/Otp",
        element: <OtpPage />,
      },
      {
        path: "/Createnewpassword", 
        element: <CreatenewpasswordPage />, 
      },
    ],
  };
};

export default AdminRoutes;
