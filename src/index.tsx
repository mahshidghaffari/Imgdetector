import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Detect from "./pages/Detect/Detect"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "detect",
        element: <Detect/>,
    },
    {
        path: "about",
        element: <About/>,
    },
    {
        path: "contact",
        element: <Contact/>,
    },
]);

// @ts-ignore
ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement
);
