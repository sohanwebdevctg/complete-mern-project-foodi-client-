import { createContext, useState } from "react";
import { getUser } from "../localstorage/localstorage";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(getUser())
  const [loading, setLoading] = useState(true)

  const userInfo = {user, setUser, loading, setLoading}

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;