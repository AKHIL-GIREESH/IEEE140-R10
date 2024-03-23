import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useMutation, useQuery } from "@tanstack/react-query";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const userFunc = useGetUser();
  if(userFunc?.data.firstName !== user){
    setUser(userFunc?.data.firstName)
  }
//   useEffect(() => {
//     const token = Cookies.get("token");
//     if (token !== undefined) {
//       console.log(token);
//     //   userFunc()
//     } else {
//       console.log("No Token");
//     }
//   }, [user]);
  console.log(userFunc);
  console.log("check")
  //JWT

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const { user } = useContext(AuthContext);

  if (user === undefined) {
    throw new Error("useAuth out of scope");
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
    if(token !== undefined){
        const user = useQuery({
            queryFn: () =>
              fetch("http://159.65.7.52:5000/api/auth/profile", {
                headers: {
                  "Content-Type": "application/json",
                  "Authorization":token
                },
              }).then(resp => resp.json()).catch(() => console.log("Something went wrong")),
          });
          return user?.data
    }
    return null
};
