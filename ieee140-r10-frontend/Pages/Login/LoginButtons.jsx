import { Link } from "react-router-dom"

const LoginButtons = () => {
    
    const loginFunc = () => {
        console.log("login")
    }
    
    return(
        <div>
            <button style={{color:"white"}} onClick={loginFunc}>LOGIN</button>
            <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>SIGNUP</Link></button>
        </div>
    )
}

export default LoginButtons