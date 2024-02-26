import { FAQdata } from "../mocks/FAQ"

const FAQ = () => {
    return(
        <>
            <h1>For Quiries</h1>
            <div className="glassWrapper-Query">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Query" />
                <button>Submit</button>
            </div>

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