import { Link } from 'react-router-dom'
import useSignIn from '../hooks/useSignIn'

const SignUpButtons = ({signUpData}) => {

    const data = useSignIn(signUpData)
    console.log(data?.data)

    const SignUpFunc = () => {
        console.log("login")
        data.mutate()
    }

    return (
        <div>
            <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>BACK</Link></button>
            <button style={{textDecoration:"none",color:"white"}} onClick={SignUpFunc}>SUBMIT</button>
        </div>
    )
}

export default SignUpButtons