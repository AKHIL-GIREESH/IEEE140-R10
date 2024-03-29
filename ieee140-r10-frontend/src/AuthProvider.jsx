import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useMutation, useQuery } from "@tanstack/react-query";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const userFunc = useGetUser();
  if(userFunc?.data && userFunc?.data.firstName !== user ){
    console.log("Works")
    console.log(userFunc)
    setUser(userFunc?.data?.firstName)
  }
    // // Check if userFunc.data is defined and setUser only if it's different from the current user state
    // if (userFunc.data && userFunc.data.firstName !== user) {
    //     console.log(userFunc.data.firstName)
    //   setUser(userFunc.data.firstName);
    // }
    // console.log(userFunc)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const { user } = useContext(AuthContext);
  console.log(user)

  if (user === undefined) {
    return null
  }

  return user;
};

export const useSetAuth = () => {
  const { setUser } = useContext(AuthContext);

  const setAuth = ({ user, token }) => {
    if (user === undefined) {
      throw new Error("Provide user");
    }
    setUser(user);
    Cookies.set("token", token, { expires: 7 });
  };

  return setAuth;
};

export const useGetUser = () => {
    const token = Cookies.get("token")
    console.log(token)
    const user = useQuery({
        queryKey:["User"],
        queryFn: () =>
          fetch("http://159.65.7.52:5000/api/auth/getself", {
            headers: {
              "Content-Type": "application/json",
              "Authorization":token
            },
          }).then(resp => resp.json()).catch(() => console.log("Something went wrong")),
      });

    if(user.error){
      return null
    }

    return user.data
};

export const useLogout = () => {

  const { setUser } = useContext(AuthContext);

  const logout = () => {
    console.log("check")
    Cookies.remove('token');
    setUser(null)
  };

  return logout;
}
