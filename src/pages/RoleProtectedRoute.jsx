import { Navigate, Outlet } from "react-router-dom";
import { useFunction } from "../context/Context";

const RoleProtectedRoute = ({ allowedRoles }) => {
    const { user } = useFunction()

    if (!user) {
        return <Navigate to='/home' replace />;
    }

    if (!allowedRoles.includes(user.rol)) {
        return <Navigate to='/home' replace />;
    }

    return <Outlet />;
};

export default RoleProtectedRoute;
