import { useState } from "react"
import SubmitButtonFAQ from "./SubmitBttnFAQ"

const NewReq = () => {

    const [ques,setQues] = useState({
        fullname:"",
        email:"",
        question:""
    })

    const handleChange = ({target}) => {
        const {name,value} = target
        setQues({...ques,[name]:value})
    }

    return(
        <>
            <h2>For Queries</h2>
            <div className="glassWrapper-Query" style={window.innerHeight>window.innerWidth?{width:"88%",marginLeft:"3%"}:null}>
                <input type="text" placeholder="  Full Name" name="fullname" onChange={handleChange} value={ques.fullname}/>
                <input type="text" placeholder="  Email" name ="email" onChange={handleChange} value={ques.email}/>
                <textarea placeholder=" Query" name="question" onChange={handleChange} value={ques.question}/>
                <SubmitButtonFAQ ques={ques}/>
            </div>
            <br/><br/>
        </>
    )
}

export default NewReq