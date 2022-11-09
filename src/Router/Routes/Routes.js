import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddAService from "../../Pages/AddAService/AddAService";
import AllServices from "../../Pages/AllServices/AllServices";
import Login from "../../Pages/Auth/Login/Login";
import Register from "../../Pages/Auth/Register/Register";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:4000/services')
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:4000/service/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addservice',
                element: <AddAService></AddAService>
            }
        ]
    }
]);