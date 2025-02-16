import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


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

  },[user])




  const userInfo = { user, setUser, loading, setLoading, logoutBtn };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
