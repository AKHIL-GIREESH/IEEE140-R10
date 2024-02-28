import { MdRadioButtonChecked } from "react-icons/md"; //ticked
import { MdRadioButtonUnchecked } from "react-icons/md";

const SignUpChoice = () => {
    return(
        <div className="fullScreenDivContainer" style={{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>Choose your Category</h1>
            <div style={{fontSize:"21px"}}>
                <div>
                    <MdRadioButtonChecked style={{color:"#0073DD"}}/>
                    <span>IEEE</span>
                </div>
                <div>
                    <MdRadioButtonUnchecked/>
                    <span>Non-IEEE</span><br/>
                </div>
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