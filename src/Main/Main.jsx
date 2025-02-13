import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import useAuth from "../hook/useAuth";
import LoadingSpinner from './../Components/LoadingSpinner';


const Main = () => {

  const {loading} = useAuth()

  return (
    <>
    <div>
      {loading === false ? <LoadingSpinner></LoadingSpinner> : <div>
        <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer></div>}
    </div>
    </>
  );
};

export default Main;