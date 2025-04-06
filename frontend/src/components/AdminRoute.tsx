import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

interface Props {
    children: React.ReactNode;
}

const AdminRoute = ({ children }: Props) => {
    const user = useSelector((state: RootState) => state.auth.user);

    if (!user || user.tipo !== "admin") {
        return <Navigate to="/perfil" />;
    }

    return <>{children}</>;
};

export default AdminRoute;
