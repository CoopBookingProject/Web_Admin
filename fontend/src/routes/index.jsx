import { useRoutes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import MainRoutes from "./MainRoutes"
export default function ConfigRoutes() {
    let login = localStorage.getItem("isLogin")
    let routes = [];
if(login) {
    routes = [AdminRoutes()];
}else{
    routes = [MainRoutes()];
}
   

    return useRoutes(routes);
}