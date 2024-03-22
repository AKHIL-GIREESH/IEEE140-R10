const SignUpFields = ({signUpData,setSignUpData}) => {

    const handleChangeSignUp = ({target}) => {
        const {name ,value} = target
        setSignUpData({...signUpData,[name]:value})
    }

    return(
        <>
            <input type="text" placeholder="  Full Name" value={signUpData.name} name="name"  onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  Email" value={signUpData.email} name="email"  onChange={handleChangeSignUp}/>
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