import "../signUpStyles.css"

const SignUpFields = ({signUpData,setSignUpData,verifyMail}) => {

    const handleChangeSignUp = ({target}) => {
        const {name ,value} = target
        setSignUpData({...signUpData,[name]:value})
    }

    return(
        <>
            <input type="text" placeholder="  Full Name" value={signUpData.firstName} name="firstName"  onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  Email" value={signUpData.email} name="email"  onChange={handleChangeSignUp} style={{color:"black",border: (signUpData.email === "" || verifyMail)?null:"1px solid red"}}/>
            <input type="text" placeholder="  IEEE Number" value={signUpData.ieeeMemberNumber} name="ieeeMemberNumber" onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  IEEE Section" value={signUpData.section} name="section" onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  City" value={signUpData.city} name="city" onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  State" value={signUpData.state} name="state" onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  Country" value={signUpData.country} name="country" onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  Password" value={signUpData.password} name="password" onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  Confirm Password" value={signUpData.confirmPassword} name="confirmPassword" onChange={handleChangeSignUp}/>
        </>
    )
}

export default SignUpFields