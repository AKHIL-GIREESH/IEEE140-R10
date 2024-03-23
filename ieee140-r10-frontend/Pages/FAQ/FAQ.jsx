import { FAQdata } from "../../mocks/FAQ"
import { IoIosArrowDown } from "react-icons/io";
import './FAQ.css'
import NewReq from "./components/NewReq";
import { useState } from "react"

const FAQ = () => {
    const [currentFAQ,setCurrentFAQ] = useState(false)
    return(
        //debugging
        <div className="fullScreenDivContainer">
            <NewReq/>
            <h2>FAQ</h2>
            {
                FAQdata.map(({id,Q,A}) => {
                    return(
                        <div className="glassWrapper-FAQ" key={id} onClick={() => currentFAQ === id?setCurrentFAQ(-1):setCurrentFAQ(id)} style={{height:currentFAQ === id?"20vh":"8vh"}}>
                            <div style={{fontSize:"1.3rem",fontWeight:600,display:"flex",alignItems:"center"}}>
                                <div style={{width:"95%"}}>
                                    {Q}
                                </div>
                            <IoIosArrowDown />
                            </div>
                            {currentFAQ === id && <div>{A}</div>}
                        </div>
                    )
                })
            
            }

        </div>
    )
}

export default FAQ