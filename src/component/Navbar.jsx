import { NavLink } from "react-router";


const Navbar = () => {


    const navList = <>
        <li><NavLink to={'/'}
            className={({ isActive }) =>
                `font-medium hover:text-primary ${isActive ? "text-primary border-b-2 border-purple-500" : "hover:"}`}>Home</NavLink></li>

        <li><NavLink to={'/allProducts'} className={({ isActive }) =>
            `font-medium hover:text-purple-500 bg-none ${isActive ? "text-primary border-b-2 border-purple-500" : ""}`} >All Product</NavLink></li>

        <li><NavLink to={'/myProducts'} className={({ isActive }) =>
            `font-medium hover:text-purple-500 bg-none ${isActive ? "text-primary border-b-2 border-purple-500" : ""}`} >My Products</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navList}
                    </ul>
                </div>
                <a className=" btn-ghost cursor-pointer font-semibold text-2xl">Smart<span className="text-primary">Deals</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navList}

                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <NavLink to={'/login'} className={({ isActive }) => isActive ? "bg-primary btn btn-outline  text-white font-bold" : "font-bold btn btn-outline border border-purple-500 text-primary"}>Login</NavLink>
                <NavLink to={'/registration'} className={({ isActive }) => isActive ? "bg-primary btn btn-outline  text-white font-bold" : "font-bold btn btn-outline border border-purple-500 text-primary"}>Register</NavLink>
            </div>
        </div>
    );
};

export default Navbar;