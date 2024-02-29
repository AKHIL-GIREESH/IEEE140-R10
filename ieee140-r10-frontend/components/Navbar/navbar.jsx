import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div style={{position:"sticky",top:10,width:"96vw",height:"15vh",marginLeft:"2vw",backgroundColor:"black",borderRadius:"10px",zIndex:3}}>
            <Link to="/SignUpChoice">SignUp</Link>
        </div>
    )
}

export default Navbar