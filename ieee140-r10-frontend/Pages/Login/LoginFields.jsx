const LoginFields = ({loginData,setLoginData}) => {

    console.log(loginData)
    

    const handlechange = ({target}) => {
        const {name ,value} = target
        setLoginData({...loginData,[name]:value})
    }

    return(
        <>
            <input type="text" name="email" placeholder="  Email" value={loginData.email} onChange={handlechange} style={{color:"black"}}/>
            <input type="text" name="password" placeholder="  Password" value={loginData.password} onChange={handlechange}/>
        </>
        
    )
}

export default LoginFields