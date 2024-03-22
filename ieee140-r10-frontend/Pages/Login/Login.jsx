import { useState } from "react"
import { Link } from "react-router-dom"
import LoginButtons from "./LoginButtons"
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
                <LoginButtons loginData={loginData}/>
            </div>
        </div>
    )
}

export default Login