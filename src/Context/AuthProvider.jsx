import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import Swal from "sweetalert2";
import useUser from "../hook/useUser";


// context start
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // const [user, setUser] = useState(null);
  const [user, refetch] = useUser();
  console.log(user)
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
        // navigate("/");
      }
    });
  };




  const userInfo = { user, loading, setLoading, logoutBtn };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
