import { useState } from 'react'
import './SignUp.css'
import SignUpButtons from './SignUpButtons'
import SignUpFields from './SignUpFields'

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

    return(
        <div style={{marginLeft:"25vw"}}>
            <h1>Create an Account</h1>
            <div className="glassWrapper-SignUp">
                <SignUpFields signUpData={signUpData} setSignUpData={setSignUpData}/>
                <SignUpButtons/>
            </div>
        </div>

    )
}

export default SignUp