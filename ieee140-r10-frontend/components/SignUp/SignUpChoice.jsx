import { MdRadioButtonChecked } from "react-icons/md"; //ticked
import { MdRadioButtonUnchecked } from "react-icons/md";

const SignUpChoice = () => {
    return(
        <div>
            <h1>Choose your Category</h1>
            <div>
                <MdRadioButtonChecked style={{color:"#0073DD"}}/>
                <MdRadioButtonUnchecked/>
            </div>
            
        </div>
    )
}

export default SignUpChoice