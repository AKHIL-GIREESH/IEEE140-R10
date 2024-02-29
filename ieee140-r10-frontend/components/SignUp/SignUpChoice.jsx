import { useState } from "react";
import { MdRadioButtonChecked } from "react-icons/md"; //ticked
import { MdRadioButtonUnchecked } from "react-icons/md";

const SignUpChoice = () => {

    const [radio,setRadio] = useState("IEEE")

    let rbData = [
        "IEEE",
        "Non-IEEE"
    ]

    return(
        <div className="fullScreenDivContainer" style={{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>Choose your Category</h1>
            <div style={{fontSize:"21px"}}>
                {rbData.map(item => {
                    return(<div style={{cursor:"pointer"}} onClick={() => setRadio(item)}>
                        {item === radio?<MdRadioButtonChecked style={{color:"#0073DD"}}/>:<MdRadioButtonUnchecked/>}
                        <span>{item}</span>
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
            <div>
                <button>BACK</button>
                <button>NEXT</button>
            </div>
            
        </div>
    )
}

export default SignUpChoice