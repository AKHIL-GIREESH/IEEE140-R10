import { useState } from "react"
import { Link } from "react-router-dom"
import { useSetAuth } from "../../src/AuthProvider"
import LoginButtons from "./components/LoginButtons"
import LoginFields from "./components/LoginFields"
import './login.css'

const Login = () => {

    const [loginData,setLoginData] = useState({
        email:"",
        password:""
    })

    const verifyMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(loginData.email)

    const setAuth = useSetAuth();

    return(
        <div style={{display:'flex',flexDirection:"column",alignItems:"center",height:"100vh",justifyContent:"center"}}>
            <p style={{fontSize:"2.5rem",padding:0,margin:"1% 0",fontWeight:"700"}}>LOGIN</p>
            <div className="glassWrapper-Login" style={window.innerHeight>window.innerWidth?{width:"85%"}:null}>
                <LoginFields loginData={loginData} setLoginData={setLoginData} verifyMail={verifyMail}/>
                <LoginButtons loginData={loginData} setAuth={setAuth} verifyMail={verifyMail}/>
            </div>
        </div>
    )
}

export default Login