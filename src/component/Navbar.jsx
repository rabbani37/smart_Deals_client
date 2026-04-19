import { Link, NavLink } from "react-router";
import useAuthH from "../hooks/useAuthH";


const Navbar = () => {

    const { user, LogOut } = useAuthH()

    const handleLogOut = () => {
        LogOut()
    }
  

    const navList = <>
        <li className="">
            <NavLink to={'/'} className={({ isActive }) => `${isActive ? "text-primary border-b-2 font-bold " : ""}hover:bg-transparent  focus:text-primary hover:text-primary`}>Home</NavLink>
        </li>

        <li>
            <NavLink to={'/allProducts'} className={({ isActive }) => `${isActive ? "text-primary border-b-2 font-bold " : ""} hover:bg-transparent focus:text-primary hover:text-primary`} >All Product</NavLink>
        </li>

        <li>
            <NavLink to={'/myProducts'} className={({ isActive }) =>
                `${isActive ? "text-primary border-b-2 font-bold " : ""}hover:bg-transparent focus:text-primary hover:text-primary`} >My Products</NavLink>
        </li>

        <li>
            <NavLink to={'/myBids'} className={({ isActive }) =>
                `${isActive ? "text-primary border-b-2 font-bold " : ""}hover:bg-transparent focus:text-primary hover:text-primary`} >My Bids</NavLink>
        </li>

        <li>
            <NavLink to={'/createProduct'} className={({ isActive }) =>
                `${isActive ? "text-primary border-b-2 font-bold " : ""}hover:bg-transparent focus:text-primary hover:text-primary`} >Create Product</NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1  w-52 p-2 shadow">
                        {navList}
                    </ul>
                </div>
                <a className=" btn-ghost cursor-pointer font-semibold text-2xl">Smart<span className="text-primary">Deals</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3 font-medium  ">

                    {navList}

                </ul>
            </div>


            <div className="navbar-end space-x-2 ">

                {
                    user ?
                        <div className="dropdown dropdown-end mr-5 p-0.75 bg-primary rounded-full">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-16 rounded-full">
                                    <img
                                        alt={`User photo`}
                                        src={user.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu  menu-lg dropdown-content  rounded-box z-1 mt-3  p-2 shadow-2xl ">
                                <li className="bg-primary btn btn-outline  text-white font-bold "><Link
                                    onClick={handleLogOut} className="active:bg-transparent text-white bg-transparent">Logout</Link></li>
                                    <li>{user.displayName}</li>
                            </ul>
                        </div>
                        :
                        <NavLink to={'/login'} className="bg-primary btn btn-outline text-xl  text-white font-bold">Login</NavLink>
                }

            </div>
        </div>

    );
};

export default Navbar;