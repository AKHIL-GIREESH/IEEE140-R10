import { Link,useNavigate } from 'react-router-dom'
import { useMutation } from "@tanstack/react-query"
import ReCAPTCHA from 'react-google-recaptcha'

const SignUpButtons = ({signUpData,verifyMail,setAuth,verifyPassword}) => {

    // const data = useSignIn(signUpData)
    // console.log(data?.data)

    // const SignUpFunc = () => {
    //     console.log("login")
    //     data.mutate()
    // }
    let verifyCaptcha = false

    const onChange = () => {
        verifyCaptcha = true
    }

    const navi = useNavigate()

    const {confirmPassword,...apiData} = signUpData //delete signUpData.confirmPassword

    const signedUser = useMutation({
        mutationKey:["signUp"],
        mutationFn:() => fetch("http://159.65.7.52:5000/api/auth/register/",{method:"POST",body: JSON.stringify(apiData),
        headers: {
          "Content-Type": "application/json"
        }})
        .then(resp => resp.json())
        .then(respJSON => respJSON.data)
        .catch(err => console.log(err)),
        onSuccess: data => {
            console.log("WOrks")
            setAuth({user:data.user.firstName,token:"Bearer "+data.token})
            navi('/',{replace:true})
        },
        onError: error => console.error('Error during sign-up:', error)
        })
    
    const SignUpFunc = () => {
        signedUser.mutate()
    }

    console.log(Object.values(signUpData).includes("") && !verifyMail && !verifyPassword) //&& !verifyCaptcha)

    return (
        <div style={{height:"20vh",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <div style={{height:"50%",alignSelf:"flex-start"}}>
                <ReCAPTCHA 
                    className='captcha'
                    sitekey="6Leqq6gpAAAAAL617ua6e5nwhGkvEFkT_cAEv4dP"
                    onChange={onChange}
                />
                {signedUser.isError && <p>Something went Wrong</p>}
            </div>
            <div style={{height:"50%",marginTop:"2%"}}>
                <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>BACK</Link></button> 
                <button className="DisabledButton" style={{textDecoration:"none"}} onClick={SignUpFunc} disabled={Object.values(signUpData).includes("") && !verifyMail && !verifyPassword}>{signedUser.isPending?"Loading":"SIGNUP"}</button>
            </div>
            {/* disabled={Object.values(signUpData).includes("") && !verifyMail && !verifyPassword } */}
        </div>
    )
}

export default SignUpButtons