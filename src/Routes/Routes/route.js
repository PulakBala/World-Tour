import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import News from "../../News/News";
import Booking from "../../OthersPage/Booking/Booking";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Destination from "../../Pages/Destination/Destination";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import Bangladesh from "../../Shared/Bangladesh/Bangladesh";
import India from "../../Shared/India/India";
import Switerland from "../../Shared/Switerland/Switerland";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>, 
            },
            {
                path: '/news',
                element:<News></News>,
            },
            {
                path: '/destination',
                element: <Destination></Destination>,
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/Contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Registration></Registration>
            },
            {
                path: '/india',
                element: <India></India>,
                loader:({params}) => fetch(`https://tour-argentina-server-pulakbala.vercel.app/india`)
            },
            {
                path: '/bangladesh',
                element: <Bangladesh></Bangladesh>,
                loader: () => fetch(`https://tour-argentina-server.vercel.app/bangladesh`)
            },
            {
                path: '/switerland',
                element: <Switerland></Switerland>,
                loader: ()=>fetch(`https://tour-argentina-server.vercel.app/switzerland`)
            },
            {
                path: '/booking',
                element: <Booking></Booking>

            }


            
        ]
    }
])