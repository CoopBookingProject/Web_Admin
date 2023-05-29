import { useRoutes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";

export default function ConfigRoutes() {
    let routes = [];

    routes = [AdminRoutes()];

    return useRoutes(routes);
}