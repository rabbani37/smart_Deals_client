import { Outlet } from "react-router";


const MyProducts = () => {
    return (
        <div>
             <h1 className="text-center text-xl text-purple-500">My Products</h1>
             <Outlet />
        </div>
    );
};

export default MyProducts;