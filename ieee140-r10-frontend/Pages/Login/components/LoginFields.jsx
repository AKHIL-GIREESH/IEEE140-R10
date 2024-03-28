const LoginFields = ({loginData,setLoginData}) => {

    const handlechange = ({target}) => {
        const {name ,value} = target
        setLoginData({...loginData,[name]:value})
    }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return emailRegex.test(email)

    return(
        <>
            <input type="text" name="email" placeholder="  Email" value={loginData.email} onChange={handlechange} style={{color:"black",border: (loginData.email === "" || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(loginData.email))?null:"1px solid red"}}/>
            <input type="text" name="password" placeholder="  Password" value={loginData.password} onChange={handlechange}/>
        </>
        
    )
}

export default LoginFields