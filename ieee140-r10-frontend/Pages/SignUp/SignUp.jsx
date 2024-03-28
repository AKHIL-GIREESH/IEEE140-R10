import { useState } from 'react'
import './SignUp.css'
import SignUpButtons from './components/SignUpButtons'
import SignUpFields from './components/SignUpFields'
import { useSetAuth } from '../../src/AuthProvider'

const SignUp = () => {

    const [signUpData,setSignUpData] = useState({
        name:"",
        email:"",
        section:"",
        city:"",
        state:"",
        country:"",
        password:"",
        confirmPassword:""
    })

    const verifyMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(loginData.email)

    const setAuth = useSetAuth();

    return(
        <div style={{marginLeft:"25vw"}}>
            <h1>Create an Account</h1>
            <div className="glassWrapper-SignUp">
                <SignUpFields signUpData={signUpData} setSignUpData={setSignUpData} verifyMail={verifyMail}/>
                <SignUpButtons signUpData={signUpData} setAuth={setAuth} verifyMail={verifyMail}/>
            </div>
        </div>

    )
}

export default SignUp