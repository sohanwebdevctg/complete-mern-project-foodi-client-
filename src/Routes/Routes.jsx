import {createBrowserRouter} from "react-router-dom";
import Main from '../Main/Main';
import Home from "../Page/Home/Home";
import Menu from "../Page/Menu/Menu";
import Signup from "../Components/Signup";
import Carts from "../Page/Dashboard/Carts";
import Login from "../Components/Login";
import Dashboard from "../Main/Dashboard";
import AllUser from "../Page/Dashboard/AllUser";
import UpdateProfile from "../Page/Dashboard/UpdateProfile";
import AddMenu from "../Page/Dashboard/AddMenu";
import UpdateMenu from "../Page/Dashboard/UpdateMenu";
import AllMenu from "../Page/Dashboard/AllMenu";
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
        path : '/carts',
        element :<Carts></Carts>
      },
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path : 'profile',
        element : <Profile></Profile>
      },
      {
        path : 'updateProfile',
        element : <UpdateProfile></UpdateProfile>
      },
      {
        path : 'addMenu',
        element : <AddMenu></AddMenu>
      },
      {
        path : 'allMenu',
        element : <AllMenu></AllMenu>
      },
      {
        path : 'updateMenu',
        element : <UpdateMenu></UpdateMenu>
      },
      {
        path : 'allUser',
        element : <AllUser></AllUser>
      },
    ]
  },
  {
    path : '/login',
    element : <Login></Login>
  },
  {
    path : '/signup',
    element : <Signup></Signup>
  }
]);