import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import Swal from "sweetalert2";
import axios from "axios";


// context start
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // const [user, setUser] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  // const navigate = useNavigate();

  // logoutBtn function
  const logoutBtn = () => {
    axiosSecure.post("/user/logOut", {}).then((res) => {
      if (res.data) {
        setUser(null)
        // show success message
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate another page
      }
    });
  };

  // get user information from local storage
  useEffect(() => {

    const fetchUser = async () => {
      try{
        await axiosSecure.get('/user/profile').then((res) => {
          setUser(res.data)
        })
      }catch(error){
        console.log("User not authenticated");
      }
    }
    fetchUser()
  },[axiosSecure])




  const userInfo = { user, setUser, loading, setLoading, logoutBtn };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
