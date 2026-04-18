import { Navigate, useLocation } from "react-router";
import useAuthH from "../hooks/useAuthH";
import LoadScreen from "../component/LoadScreen";

const PrivetRout = ({ children  }) => {
    const { user, loading } = useAuthH();
    const location = useLocation();




    if (loading) {
        return <LoadScreen />
    }
    if (!user) {
        return <Navigate state={location.pathname} to={'/login'} />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRout;