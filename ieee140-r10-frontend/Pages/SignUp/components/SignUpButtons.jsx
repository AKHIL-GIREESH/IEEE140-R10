import { Link } from 'react-router-dom'
import { useMutation } from "@tanstack/react-query"

const SignUpButtons = ({signUpData,verifyMail,setAuth}) => {

    // const data = useSignIn(signUpData)
    // console.log(data?.data)

    // const SignUpFunc = () => {
    //     console.log("login")
    //     data.mutate()
    // }

    delete signUpData.confirmPassword
    signUpData = {...signUpData,lastName:"_",is_ieee: true}
    console.log(signUpData)


    const signedUser = useMutation({
        mutationKey:["signUp"],
        mutationFn:() => fetch("http://159.65.7.52:5000/api/auth/register/",{method:"POST",body: JSON.stringify(
            {
                firstName: "User74",
                lastName: "Doe",
                email: "user74@gmail.com",
                password: "user7",
                ieeeMemberNumber: "ABC123XYZ",
                section: "Example Section",
                city: "Example City",
                state: "Example State",
                country: "Example Country",
                is_ieee: true
              }
        ),headers: {
          "Content-Type": "application/json"
        }})
        .then(resp => resp.json())
        .then(respJSON => respJSON.data)
        .catch(err => console.log(err)),
        onSuccess: data => {
            console.log("WOrks")
            setAuth({user:data.user.firstName,token:"Bearer "+data.token})
        },
        onError: error => console.error('Error during sign-up:', error)
        })
    
    const SignUpFunc = () => {
        signedUser.mutate()
    }

    return (
        <div>
            <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>BACK</Link></button> 
            <button style={{textDecoration:"none",color:"white"}} onClick={SignUpFunc}>{signedUser.isPending?"Loading":"SIGNUP"}</button>
            {signedUser.isError && <p>Oops Wrong Credentials!</p>}
            {/* disabled={Object.values(signUpData).includes("") && !verifyMail} */}
        </div>
    )
}

export default SignUpButtons