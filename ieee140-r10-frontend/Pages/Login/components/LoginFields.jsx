const LoginFields = ({loginData,setLoginData,verifyMail}) => {

    const handlechange = ({target}) => {
        const {name ,value} = target
        setLoginData({...loginData,[name]:value})
    }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return emailRegex.test(email)

    return(
        <>
            <input type="text" name="email" placeholder="  Email" value={loginData.email} onChange={handlechange} style={{color:"black",border: (loginData.email === "" || verifyMail)?null:"1px solid red"}}/>
            <input type="text" name="password" placeholder="  Password" value={loginData.password} onChange={handlechange}/>
        </>
        
    )
}

export default LoginFields