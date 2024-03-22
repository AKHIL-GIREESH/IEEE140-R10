import { useState } from "react"
import { Link } from "react-router-dom"
import LoginFields from "./LoginFields"

const Login = () => {

    const [loginData,setLoginData] = useState({
        email:"",
        password:""
    })

    return(
        <div style={{marginLeft:"25vw"}}>
            <h1>Create an Account</h1>
            <div className="glassWrapper-SignUp">
                <LoginFields loginData={loginData} setLoginData={setLoginData}/>
                <div>
                    <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>LOGIN</Link></button>
                    <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>SIGNUP</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Login