import {createBrowserRouter} from "react-router-dom";
import Main from '../Main/Main';
import Home from "../Page/Home/Home";
import Menu from "../Page/Menu/Menu";
import Signup from "../Components/Signup";
import Profile from "../Page/Dashboard/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/menu',
        element : <Menu></Menu>
      },
      {
        path : '/profile',
        element : <PrivateRoute><Profile></Profile></PrivateRoute>
      },
    ]
  },
  {
    path : '/signup',
    element : <Signup></Signup>
  }
]);