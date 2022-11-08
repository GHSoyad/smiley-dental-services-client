import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import ServicePage from "../pages/ServicePage/ServicePage";
import Services from "../pages/Services/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch('https://smiley-dental-services-server.vercel.app/services-3'),
                element: <Home></Home>
            },
            {
                path: "/services",
                loader: () => fetch('https://smiley-dental-services-server.vercel.app/services'),
                element: <Services></Services>
            },
            {
                path: "/service/:id",
                loader: ({ params }) => fetch(`https://smiley-dental-services-server.vercel.app/service/${params.id}`),
                element: <ServicePage></ServicePage>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])

export default router;