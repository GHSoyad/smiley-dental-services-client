import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddService from "../pages/AddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import ServicePage from "../pages/ServicePage/ServicePage";
import Services from "../pages/Services/Services";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                loader: () => fetch('https://smiley-dental-services-server.vercel.app/services-3'),
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/service/:id",
                loader: ({ params }) => fetch(`https://smiley-dental-services-server.vercel.app/service/${params.id}`),
                element: <ServicePage></ServicePage>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/my-reviews",
                element: <PrivateRouter><MyReviews></MyReviews></PrivateRouter>
            },
            {
                path: "/add-service",
                element: <PrivateRouter><AddService></AddService></PrivateRouter>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;