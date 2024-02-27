import { useState } from "react"
import { FAQdata } from "../../mocks/FAQ"
import './FAQ.css'

const FAQ = () => {

    const [currentFAQ,setCurrentFAQ] = useState(false)

    return(
        //debugging
        <div style={{border:"1px solid",width:"100vw"}}>
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
                            <div>{Q}<button></button></div>
                            {currentFAQ === id && <div>{A}</div>}
                        </div>
                    )
                })
            
            }

        </div>
    )
}

export default FAQ