import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const token = localStorage.getItem("token")

    // if token/ show the page : navigate to Login
    const content = token ? <Outlet/> : <Navigate to="/login" />
    return content
}