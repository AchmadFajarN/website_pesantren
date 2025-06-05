import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        setIsAuth(token);
    }, []);

    if (isAuth === null) {
        return <div className="w-screen h-screen"></div>
    }
    
    return isAuth ? children : <Navigate to={"/pendaftaran/login"} />
}

export default PrivateRoute;