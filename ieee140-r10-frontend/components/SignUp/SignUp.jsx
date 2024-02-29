import { Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
    return(
        <div style={{marginLeft:"25vw"}}>
            <h1>Create an Account</h1>
            <div className="glassWrapper-SignUp">
                <input type="text" placeholder="  Full Name" />
                <input type="text" placeholder="  Email" />
                <input type="text" placeholder="  IEEE Section"/>
                <input type="text" placeholder="  City"/>
                <input type="text" placeholder="  State"/>
                <input type="text" placeholder="  Country"/>
                <input type="text" placeholder="  Password"/>
                <input type="text" placeholder="  Confirm Password"/>
                <div>
                    <button><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>BACK</Link></button>
                    <button><Link to="/" style={{textDecoration:"none",color:"white"}}>SUBMIT</Link></button>
                </div>
            </div>
        </div>

    )
}

export default SignUp