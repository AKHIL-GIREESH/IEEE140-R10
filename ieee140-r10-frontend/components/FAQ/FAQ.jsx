import { FAQdata } from "../../mocks/FAQ"
import './FAQ.css'

const FAQ = () => {
    return(
        <>
            <h1>For Queries</h1>
            <div className="glassWrapper-Query">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email" />
                <textarea placeholder="Query" />
                <button>Submit</button>
            </div>
            <br/><br/>
            <h1>FAQ</h1>

            {
                FAQdata.map(({id,Q,A}) => {
                    return(
                        <div className="glassWrapper-FAQ" key={id}>
                            <p>{Q}</p>
                            <p>{A}</p>
                        </div>
                    )
                })
            
            }

        </>
    )
}

export default FAQ