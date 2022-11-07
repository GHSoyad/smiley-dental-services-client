import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch('https://smiley-dental-services-server.vercel.app/services-3'),
                element: <Home></Home>
            }
        ]
    }
])

export default router;