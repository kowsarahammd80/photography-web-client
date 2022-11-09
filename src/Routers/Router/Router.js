import { createBrowserRouter } from "react-router-dom";
import Block from "../../Components/Block/Block";
import Home from "../../Components/Home/Home";
import ServiceDetails from "../../Components/Services/ServiceDetails";

import Services from "../../Components/Services/Services";
import SignIN from "../../Components/SignIn/SignIN";
import SignUP from "../../Components/SignUp/SignUP";
import Main from "../../Laout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


let router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <PrivateRoute><Services></Services></PrivateRoute>
      },
      {
        path: '/blog',
        element:<Block></Block>
      },
      {
        path: '/login',
        element: <SignIN></SignIN>
      },
      {
        path: '/signUp',
        element: <SignUP></SignUP>
      },
      {
        path: '/services/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      }
    ]
    
  }
])

export default router;