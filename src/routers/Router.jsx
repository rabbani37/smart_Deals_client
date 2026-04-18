import { Component } from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import AllProducts from "../pages/AllProducts";
import MyProducts from "../pages/MyProducts";
import Mybids from "../pages/Mybids";
import CreateProduct from "../pages/CreateProduct";
import PrivetRout from "./PrivetRout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/allProducts",
                Component: AllProducts
            },
            {
                path: "/myProducts",
                element: <PrivetRout> <MyProducts /> </PrivetRout>
            },
            {
                path: "/myBids",
                element: <PrivetRout> <Mybids /> </PrivetRout>
            },
            {
                path: "/createProduct",
                element: <PrivetRout> <CreateProduct /> </PrivetRout>
            },
            {
                path: "/registration",
                Component: Registration
            },
            {
                path: "/login",
                Component: Login
            }
        ]
    },
]);