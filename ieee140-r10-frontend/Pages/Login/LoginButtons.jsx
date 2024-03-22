import { Link } from "react-router-dom"
import useLogin from "./hooks/useLogin"

const LoginButtons = ({loginData}) => {

    const trig = useLogin(loginData)
    console.log(trig?.data)
    
    const loginFunc = () => {
        console.log("login")
        trig.mutate()
    }
    
    return(
        <div>
            <button style={{color:"white"}} onClick={loginFunc}>LOGIN</button>
            <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>SIGNUP</Link></button>
        </div>
    )
}

export default LoginButtons