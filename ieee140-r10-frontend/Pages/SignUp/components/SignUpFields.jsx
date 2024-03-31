const SignUpFields = ({signUpData,setSignUpData,verifyMail,verifyPassword}) => {

    const handleChangeSignUp = ({target}) => {
        const {name ,value} = target
        setSignUpData({...signUpData,[name]:value})
    }

    console.log(signUpData.section)
    return(
        <>
            <input type="text" placeholder="  First Name" value={signUpData.firstName} name="firstName"  onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  Last Name" value={signUpData.lastName} name="lastName"  onChange={handleChangeSignUp}/>
            <input type="text" placeholder="  Email" value={signUpData.email} name="email"  onChange={handleChangeSignUp} style={{border: (signUpData.email === "" || verifyMail)?null:"1px solid red"}}/>
            {
            localStorage.getItem('MemType') === "IEEE Member" && <>
                <input type="text" placeholder="  IEEE Number" value={signUpData.ieeeMemberNumber} name="ieeeMemberNumber" onChange={handleChangeSignUp}/>
                {/* <input type="text" placeholder="  IEEE Section" value={signUpData.section} name="section" onChange={handleChangeSignUp}/> */}
                <div style={{display:"flex",width:"100%",height:"6%"}}>
                <select name="section" value={signUpData.section} onChange={handleChangeSignUp}>
                    <option value="Australian Capital Territory">Australian Capital Territory</option>
                    <option value="Bangalore Section">Bangalore Section</option>
                    <option value="Bangladesh Section">Bangladesh Section</option>
                    <option value="Beijing Section">Beijing Section</option>
                    <option value="Bombay Section">Bombay Section</option>
                    <option value="Busan Section">Busan Section</option>
                    <option value="Chengdu Section">Chengdu Section</option>
                    <option value="Daejeon Section">Daejeon Section</option>
                    <option value="Delhi Section">Delhi Section</option>
                    <option value="Fukuoka Section">Fukuoka Section</option>
                    <option value="Guangzhou Section">Guangzhou Section</option>
                    <option value="Gujarat Section">Gujarat Section</option>
                    <option value="Gwangju Section">Gwangju Section</option>
                    <option value="Harbin Section">Harbin Section</option>
                    <option value="Hiroshima Section">Hiroshima Section</option>
                    <option value="Hong Kong Section">Hong Kong Section</option>
                    <option value="Hyderabad Section">Hyderabad Section</option>
                    <option value="Indonesia Section">Indonesia Section</option>
                    <option value="Islamabad Section">Islamabad Section</option>
                    <option value="Kansai Section">Kansai Section</option>
                    <option value="Karachi Section">Karachi Section</option>
                    <option value="Kerala Section">Kerala Section</option>
                    <option value="Kharagpur Section">Kharagpur Section</option>
                    <option value="Kolkata Section">Kolkata Section</option>
                    <option value="Lahore Section">Lahore Section</option>
                    <option value="Macau Section">Macau Section</option>
                    <option value="Madhya Pradesh Section">Madhya Pradesh Section</option>
                    <option value="Madras Section">Madras Section</option>
                    <option value="Malaysia Section">Malaysia Section</option>
                    <option value="Nagoya Section">Nagoya Section</option>
                    <option value="Nanjing Section">Nanjing Section</option>
                    <option value="New South Wales Section">New South Wales Section</option>
                    <option value="New Zealand Central Section">New Zealand Central Section</option>
                    <option value="New Zealand North Section">New Zealand North Section</option>
                    <option value="New Zealand South Section">New Zealand South Section</option>
                    <option value="Northern Australia Section">Northern Australia Section</option>
                    <option value="Pune Section">Pune Section</option>
                    <option value="Queensland Section">Queensland Section</option>
                    <option value="Republic of Philippines Section">Republic of Philippines Section</option>
                    <option value="Sapporo Section">Sapporo Section</option>
                    <option value="Sendai Section">Sendai Section</option>
                    <option value="Seoul Section">Seoul Section</option>
                    <option value="Shanghai Section">Shanghai Section</option>
                    <option value="Shikoku Section">Shikoku Section</option>
                    <option value="Shin-etsu Section">Shin-etsu Section</option>
                    <option value="Singapore Section">Singapore Section</option>
                    <option value="South Australia Section">South Australia Section</option>
                    <option value="Sri Lanka Section">Sri Lanka Section</option>
                    <option value="Taegu Section">Taegu Section</option>
                    <option value="Tainan Section">Tainan Section</option>
                    <option value="Taipei Section">Taipei Section</option>
                    <option value="Thailand Section">Thailand Section</option>
                    <option value="Tokyo Section">Tokyo Section</option>
                    <option value="Uttar Pradesh Section">Uttar Pradesh Section</option>
                    <option value="Victorian Section">Victorian Section</option>
                    <option value="Vietnam Section">Vietnam Section</option>
                    <option value="Vizag Bay Section">Vizag Bay Section</option>
                    <option value="Western Australia Section">Western Australia Section</option>
                    <option value="Wuhan Section">Wuhan Section</option>
                    <option value="Xian Section">Xian Section</option>
                </select>
                <p>Won't be able to change it later</p>
                </div>
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