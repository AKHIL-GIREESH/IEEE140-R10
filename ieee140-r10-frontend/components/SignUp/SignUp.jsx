import './SignUp.css'

const SignUp = () => {
    return(
        <div>
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
                    <button>BACK</button>
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>

    )
}

export default SignUp