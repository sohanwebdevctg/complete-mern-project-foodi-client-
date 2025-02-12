import { createContext, useState } from "react";



export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [user, setUser] = useState("null")
  const [loading, setLoading] = useState(true)

  const userInfo = {user, setUser, loading, setLoading}

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;