import { Component } from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";

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
                path:"/registration",
                Component:Registration
            },
            {
                path:"/login",
                Component:Login
            }
        ]
    },
]);