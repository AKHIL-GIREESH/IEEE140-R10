const LoginFields = ({loginData,setLoginData,verifyMail}) => {

    const handlechange = ({target}) => {
        const {name ,value} = target
        setLoginData({...loginData,[name]:value})
    }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return emailRegex.test(email)

    return(
        <div style={{height:"35%",border:"1px solid"}}>
            <input type="text" name="email" placeholder="  Email" value={loginData.email} onChange={handlechange} style={{color:"black",border: (loginData.email === "" || verifyMail)?null:"1px solid red"}}/>
            <input style={{color:"black"}} type="text" name="password" placeholder="  Password" value={loginData.password} onChange={handlechange}/>
            <p>Forgot Password?</p>
        </div>
        
    )
}

export default LoginFields