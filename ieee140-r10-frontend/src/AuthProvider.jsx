import { createContext, useState, useContext } from "react"
import Cookies from "js-cookie";

const AuthContext = createContext(null)

export default function AuthProvider({children}){
    console.log("Auth")
    //JWT
    const [user,setUser] = useState("Tommy Vercetti")
    return <AuthContext.Provider value={{user,setUser}}>{children}</AuthContext.Provider>
}


export const useAuth = () => {
    const {user} = useContext(AuthContext)
  
    if (user === undefined) {
      throw new Error('useAuth out of scope')
    }
  
    return user
}

export const useSetAuth = () => {
    const { setUser } = useContext(AuthContext)

    const setAuth = ({user,token}) => {
        if (user === undefined) {
            throw new Error('Provide user')
        }
        setUser(user)

    }

    return setAuth;
}