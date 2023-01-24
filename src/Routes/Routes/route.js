import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import News from "../../News/News";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Destination from "../../Pages/Destination/Destination";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import India from "../../Shared/India/India";

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
            }

            
        ]
    }
])