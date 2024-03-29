import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query";

const LoginButtons = ({loginData,setAuth,verifyMail}) => {

    // const trig = useLogin({loginData,setAuth,setHandleErr})
    
    // const loginFunc = async () => {
    //     console.log("login")
    //     const loggedIn = await trig.mutateAsync()
    //     console.log(loggedIn?.data)
    // }
    const navi = useNavigate()

    const loggedUser = useMutation({
        mutationFn: () =>
          fetch("http://159.65.7.52:5000/api/auth/login/", {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((resp) => resp.json())
            .then((respJSON) => respJSON.data)
            .catch((err) => console.log(err)),
        onSuccess: (data) => {
            setAuth({ user: data?.user.firstName, token: "Bearer " + data?.token })
            navi('/',{replace:true})
        },
        onError: (error) => console.error("Error during sign-up:", error),
      });

      const loginFunc = () => {
        loggedUser.mutate()
      }
    
    
    return(
        <div>
            <button style={{color:"white"}} onClick={loginFunc} disabled={Object.values(loginData).includes("") && !verifyMail}>{loggedUser.isPending?"Loading":"LOGIN"}</button>
            <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>SIGNUP</Link></button>
            {loggedUser.isError && <p>Oops Wrong Credentials!</p>}
        </div>
    )
}

export default LoginButtons