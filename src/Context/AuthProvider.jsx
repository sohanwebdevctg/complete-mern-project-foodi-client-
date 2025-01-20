import { createContext, useEffect, useState } from "react";
import { getUser } from "../localstorage/localstorage";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(getUser())

  const userInfo = {user}

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;