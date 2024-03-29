import { Link,useNavigate } from 'react-router-dom'
import { useMutation } from "@tanstack/react-query"

const SignUpButtons = ({signUpData,verifyMail,setAuth,verifyPassword}) => {

    // const data = useSignIn(signUpData)
    // console.log(data?.data)

    // const SignUpFunc = () => {
    //     console.log("login")
    //     data.mutate()
    // }

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

    return (
        <div>
            <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>BACK</Link></button> 
            <button style={{textDecoration:"none",color:"white"}} onClick={SignUpFunc} disabled={Object.values(signUpData).includes("") && !verifyMail && !verifyPassword}>{signedUser.isPending?"Loading":"SIGNUP"}</button>
            {signedUser.isError && <p>Oops Wrong Credentials!</p>}
            {/* disabled={Object.values(signUpData).includes("") && !verifyMail && !verifyPassword } */}
        </div>
    )
}

export default SignUpButtons