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

    const setAuth = useSetAuth();

    return(
        <div style={{marginLeft:"25vw"}}>
            <h1>Create an Account</h1>
            <div className="glassWrapper-SignUp">
                <SignUpFields signUpData={signUpData} setSignUpData={setSignUpData}/>
                <SignUpButtons signUpData={signUpData} setAuth={setAuth}/>
            </div>
        </div>

    )
}

export default SignUp