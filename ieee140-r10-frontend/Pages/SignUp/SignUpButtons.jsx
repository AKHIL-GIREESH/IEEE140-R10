import { Link } from 'react-router-dom'

const SignUpButtons = () => {
    return (
        <div>
            <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>BACK</Link></button>
            <button><Link to="/" style={{textDecoration:"none",color:"white"}}>SUBMIT</Link></button>
        </div>
    )
}

export default SignUpButtons