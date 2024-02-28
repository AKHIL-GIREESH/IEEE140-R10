import { useState } from "react"
import { FAQdata } from "../../mocks/FAQ"
import { IoIosArrowDown } from "react-icons/io";
import './FAQ.css'

const FAQ = () => {

    const [currentFAQ,setCurrentFAQ] = useState(false)

    return(
        //debugging
        <div className="fullScreenDivContainer">
            <h2>For Queries</h2>
            <div className="glassWrapper-Query">
                <input type="text" placeholder="  Full Name" />
                <input type="text" placeholder="  Email" />
                <textarea placeholder=" Query" />
                <button>Submit</button>
            </div>
            <br/><br/>
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