import { Link } from "react-router-dom"
import useLogin from "../hooks/useLogin"

const LoginButtons = ({loginData,setAuth}) => {

    const trig = useLogin({loginData,setAuth})
    
    const loginFunc = async () => {
        console.log("login")
        const loggedIn = await trig.mutateAsync()
        console.log(loggedIn?.data)
    }
    
    return(
        <div>
            <button style={{color:"white"}} onClick={loginFunc} disabled={Object.values(loginData).includes("")}>LOGIN</button>
            <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>SIGNUP</Link></button>
        </div>
    )
}

export default LoginButtons