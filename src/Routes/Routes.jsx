import {createBrowserRouter} from "react-router-dom";
import Main from '../Main/Main';
import Home from "../Page/Home/Home";
import Menu from "../Page/Menu/Menu";
import Signup from "../Components/Signup";
import Profile from "../Page/Dashboard/Profile";



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
        element : <Profile></Profile>
      },
    ]
  },
  {
    path : '/signup',
    element : <Signup></Signup>
  }
]);