import { Link } from 'react-router-dom'
import { useMutation } from "@tanstack/react-query"

const SignUpButtons = ({signUpData}) => {

    // const data = useSignIn(signUpData)
    // console.log(data?.data)

    // const SignUpFunc = () => {
    //     console.log("login")
    //     data.mutate()
    // }

    const signedUser = useMutation({
        mutationFn:() => fetch("http://159.65.7.52:5000/api/auth/register/",{method:"POST",body: JSON.stringify(signUpData),headers: {
          "Content-Type": "application/json"
        }})
        .then(resp => resp.json())
        .then(respJSON => respJSON.data)
        .catch(err => console.log(err)),
        onSuccess: () => (data) => setAuth({user:data.user.firstName,token:"Bearer "+data.token}),
        onError: (error) => console.error('Error during sign-up:', error)
        })
    
    const SignUpFunc = () => {
        signedUser.mutate()
    }

    return (
        <div>
            <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}} disabled={Object.values(loginData).includes("") && !verifyMail}>BACK</Link></button>
            <button style={{textDecoration:"none",color:"white"}} onClick={SignUpFunc}>{signedUser.isPending?"Loading":"SIGNUP"}</button>
            {signedUser.isError && <p>Oops Wrong Credentials!</p>}
        </div>
    )
}

export default SignUpButtons