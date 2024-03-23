import { useState } from "react"
import { Link } from "react-router-dom"
import { useSetAuth } from "../../src/AuthProvider"
import LoginButtons from "./components/LoginButtons"
import LoginFields from "./components/LoginFields"

const Login = () => {

    const [loginData,setLoginData] = useState({
        email:"",
        password:""
    })

    const setAuth = useSetAuth();

    return(
        <div style={{marginLeft:"25vw"}}>
            <h1>Create an Account</h1>
            <div className="glassWrapper-SignUp">
                <LoginFields loginData={loginData} setLoginData={setLoginData}/>
                <LoginButtons loginData={loginData} setAuth={setAuth}/>
            </div>
        </div>
    )
}

export default Login