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
    const verifyPassword = signUpData.password.length>1 && signUpData.password === signUpData.confirmPassword

    const setAuth = useSetAuth();

    return(
        <div style={{textAlign:"center"}}>
            <h1>Create an Account</h1>
            <div className="glassWrapper-SignUp" style={window.innerHeight>window.innerWidth?{width:"90vw",marginLeft:"3vw"}:{marginLeft:"25vw"}}>
                <SignUpFields signUpData={signUpData} setSignUpData={setSignUpData} verifyMail={verifyMail} verifyPassword={verifyPassword}/>
                <SignUpButtons signUpData={signUpData} setAuth={setAuth} verifyMail={verifyMail} verifyPassword={verifyPassword}/>
            </div>
        </div>

    )
}

export default SignUp