import useFAQNewQ from "../hooks/useFAQNewQ"

const SubmitButtonFAQ = () => {

    const trig = useFAQNewQ()
    
    const FAQsubmit = async() => {
        const req = await trig.mutateAsync()
    }

    return <button onClick={FAQsubmit}>Submit</button>
}

export default SubmitButtonFAQ