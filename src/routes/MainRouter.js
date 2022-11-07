import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ServicePage from "../pages/ServicePage/ServicePage";

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
                path: "/service/:id",
                loader: ({ params }) => fetch(`https://smiley-dental-services-server.vercel.app/service/${params.id}`),
                element: <ServicePage></ServicePage>
            }
        ]
    }
])

export default router;