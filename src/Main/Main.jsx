import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import LoadingSpinner from './../Components/LoadingSpinner';


const Main = () => {

  // auth context data
      const {loading} = useContext(AuthContext)


  return (
    <>
    {
      loading === false ? <LoadingSpinner></LoadingSpinner> : <div>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
    }
    </>
  );
};

export default Main;