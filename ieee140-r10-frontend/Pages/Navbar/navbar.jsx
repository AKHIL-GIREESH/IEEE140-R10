import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div style={{position:"sticky",top:10,width:"96vw",height:"15vh",marginLeft:"2vw",border:"1px solid",backgroundColor:"rgba(255,255,255,0.8)",borderRadius:"10px",zIndex:3}}>
            <Link to="/SignUpChoice" style={{color:"black"}}>SignUp</Link>
        </div>
    )
}

export default Navbar