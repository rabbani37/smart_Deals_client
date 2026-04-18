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
                Component: MyProducts
            },
            {
                path: "/myBids",
                Component: Mybids
            },
            {
                path: "/createProduct",
                Component: CreateProduct
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