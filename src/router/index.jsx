import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Congrats from "../components/congrats";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/congrats",
        element: <Congrats/>
    }
])