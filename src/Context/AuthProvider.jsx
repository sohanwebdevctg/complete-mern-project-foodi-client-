import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../hook/useAxiosSecure";


// context start
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  // const navigate = useNavigate();

  // logoutBtn function
  const logoutBtn = async () => {
    try {
      const res = await axiosSecure.post("/user/logOut", {});
      if (res.data) {
        setUser(null);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log("Logout failed");
    }
  };

  // get user information from local storage
  const fetchUser = async () => {
    try {
      const res = await axiosSecure.get("/user/profile");
      setUser(res.data);
    } catch (error) {
      console.log("User not authenticated");
      setUser(null);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchUser();
  },[])

  const userInfo = { user, setUser, loading, setLoading, logoutBtn, fetchUser };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
