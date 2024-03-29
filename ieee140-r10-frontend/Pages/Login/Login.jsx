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

    const verifyMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(loginData.email)

    const setAuth = useSetAuth();

    return(
        <div style={{marginLeft:"25vw"}}>
            <h1>Create an Account</h1>
            <div className="glassWrapper-SignUp">
                <LoginFields loginData={loginData} setLoginData={setLoginData} verifyMail={verifyMail}/>
                <LoginButtons loginData={loginData} setAuth={setAuth} verifyMail={verifyMail}/>
            </div>
        </div>
    )
}

export default Login