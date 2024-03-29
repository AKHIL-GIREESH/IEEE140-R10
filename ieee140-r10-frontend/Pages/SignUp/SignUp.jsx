import { useState } from 'react'
import './SignUp.css'
import SignUpButtons from './components/SignUpButtons'
import SignUpFields from './components/SignUpFields'
import { useSetAuth } from '../../src/AuthProvider'

const SignUp = () => {

    const [signUpData,setSignUpData] = useState(localStorage.getItem('MemType') === "IEEE" ?{
        firstName:"",
        lastName:"",
        email:"",
        ieeeMemberNumber:"",
        section:"",
        city:"",
        state:"",
        country:"",
        password:"",
        confirmPassword:"",
        is_ieee:true
    }:{
        firstName:"",
        lastName:"",
        email:"",
        city:"",
        state:"",
        country:"",
        password:"",
        confirmPassword:"",
        is_ieee:false
    })

    const verifyMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(signUpData.email)
    const verifyPassword = signUpData.password === signUpData.confirmPassword

    const setAuth = useSetAuth();

    return(
        <div style={{marginLeft:"25vw"}}>
            <h1>Create an Account</h1>
            <div className="glassWrapper-SignUp">
                <SignUpFields signUpData={signUpData} setSignUpData={setSignUpData} verifyMail={verifyMail} verifyPassword={verifyPassword}/>
                <SignUpButtons signUpData={signUpData} setAuth={setAuth} verifyMail={verifyMail} verifyPassword={verifyPassword}/>
            </div>
        </div>

    )
}

export default SignUp