import { createContext, useState, useContext } from "react"

const AuthContext = createContext(null);

export default function AuthProvider({children}){
    console.log("Auth")
    //JWT
    const [user,setUser] = useState("Tommy Vercetti");
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}


export const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (context === undefined) {
      throw new Error('useAuth out of scope');
    }
  
    return context;
}