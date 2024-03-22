import { Link } from "react-router-dom"
import { useAuth } from "../../src/AuthProvider"

const Navbar = () => {

    const user = useAuth()
    return(
        <div style={{position:"sticky",top:10,width:"96vw",height:"15vh",marginLeft:"2vw",border:"1px solid",backgroundColor:"rgba(255,255,255,0.8)",borderRadius:"10px",zIndex:3}}>
            <Link to="/Login" style={{color:"black"}}>{user === null?"Sign Up":user}</Link>
        </div>
    )
}

export default Navbar