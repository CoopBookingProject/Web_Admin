import React from "react";
import { lazy } from "react";
import FullLayout from "../layout/FullLayout";

const AdminBook = lazy(() => import("../pages/admin/customer/Book"));
const AdminHomepage = lazy(() => import("../pages/admin/customer/Homepage"));
const AdminMassage = lazy(() => import("../pages/admin/customer/Massage"));
const AdminAdmin = lazy(() => import("../pages/admin/customer/Admin"));
const AdminLogout = lazy(() => import("../pages/admin/customer/Logout"));

const AdminRoutes = () => {
    return {
        path: "/",
        element: <FullLayout />,
        children: [
            {
                path: "/",
                element: <AdminHomepage />,
            },
            {
                path: "/Book",
                element: <AdminBook/>,
            },
            {
                path: "/Massage",
                element: <AdminMassage/>,
            },
            {
                path: "/Admin",
                element: <AdminAdmin/>,
            },
            {
                path: "/Logout",
                element: <AdminLogout/>,
            },
        ],
    };
};

export default AdminRoutes;