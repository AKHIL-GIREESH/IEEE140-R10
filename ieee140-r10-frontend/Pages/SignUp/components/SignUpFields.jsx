import "../signUpStyles.css"

const SignUpFields = ({signUpData,setSignUpData,verifyMail,verifyPassword}) => {

    const handleChangeSignUp = ({target}) => {
        const {name ,value} = target
        setSignUpData({...signUpData,[name]:value})
    }

    return(
        <>
            <input type="text" placeholder="  First Name" value={signUpData.firstName} name="firstName"  onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  Last Name" value={signUpData.lastName} name="lastName"  onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  Email" value={signUpData.email} name="email"  onChange={handleChangeSignUp} style={{border: (signUpData.email === "" || verifyMail)?null:"1px solid red"}}/>
            {
            localStorage.getItem('MemType') === "IEEE" && <>
                <input type="text" placeholder="  IEEE Number" value={signUpData.ieeeMemberNumber} name="ieeeMemberNumber" onChange={handleChangeSignUp}/>
                <input type="text" placeholder="  IEEE Section" value={signUpData.section} name="section" onChange={handleChangeSignUp}/>
            </>
            }
            <input type="text" placeholder="  City" value={signUpData.city} name="city" onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  State" value={signUpData.state} name="state" onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  Country" value={signUpData.country} name="country" onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  Password" value={signUpData.password} name="password" onChange={handleChangeSignUp} style={{border: (signUpData.confirmPassword === "" || verifyPassword)?null:"1px solid red"}}/>
            <input type="text" placeholder="  Confirm Password" value={signUpData.confirmPassword} name="confirmPassword" onChange={handleChangeSignUp} style={{border: (signUpData.confirmPassword === "" || verifyPassword)?null:"1px solid red"}}/>
        </>
    )
}

export default SignUpFields