import { useState } from "react";
import { MdRadioButtonChecked } from "react-icons/md"; //ticked
import { MdRadioButtonUnchecked } from "react-icons/md";
import { Link } from "react-router-dom";

const SignUpChoice = () => {

    const [radio,setRadio] = useState("IEEE Member")

    let rbData = [
        "IEEE Member",
        "Non Member/Others"
    ]

    localStorage.setItem('MemType', radio)

    return(
        <div className="fullScreenDivContainer" style={{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <p style={{fontSize:"2.5rem",fontWeight:"700"}}>CHOOSE YOUR <span style={{color:"#0073DD"}}>CATEGORY</span></p>
            <div style={{fontSize:"21px"}}>
                {rbData.map(item => {
                    return(<div style={{cursor:"pointer",display:"flex",margin:"3vh",alignItems:"center"}} onClick={() => setRadio(item)}>
                        {item === radio?<MdRadioButtonChecked style={{color:"#0073DD",backgroundColor:"white",borderRadius:"50%"}}/>:<MdRadioButtonUnchecked style={{backgroundColor:"white",borderRadius:"50%"}}/>}
                        <span style={{marginLeft:"15px"}}>{item}</span>
                    </div>)
                })}
                {/* <div style={{cursor:"pointer"}} onClick={}>
                    <MdRadioButtonChecked style={{color:"#0073DD"}}/>
                    <span>IEEE</span>
                </div>
                <div style={{cursor:"pointer"}}>
                    <MdRadioButtonUnchecked/>
                    <span>Non-IEEE</span><br/>
                </div> */}
            </div>
            <br/>
            <div className="SignUpChoice">
                <button><Link to="/">BACK</Link></button>
                <button><Link to="/SignUp">NEXT</Link></button>
            </div>
            
        </div>
    )
}

export default SignUpChoice