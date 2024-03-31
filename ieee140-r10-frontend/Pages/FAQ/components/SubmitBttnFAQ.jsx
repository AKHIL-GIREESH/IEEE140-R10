import { useMutation } from "@tanstack/react-query"

const SubmitButtonFAQ = ({ques}) => {

    const newQ = useMutation({
        mutationFn:() => fetch("http://159.65.7.52:5000/api/faqs/",{method:"POST",body: JSON.stringify(ques),headers: {
          "Content-Type": "application/json"
        }})
        .then(resp => resp.json())
        .catch(err => console.log(err)),
        onSuccess: (data) => console.log(data),
        onError: (error) => console.error('Error during sign-up:', error)
    })
    
    const FAQsubmit = () => {
        newQ.mutate()
    }

    if(newQ.isPending){
        return <button disabled={true}>Loading</button>
    }

    return <button onClick={FAQsubmit}>Submit</button>
}

export default SubmitButtonFAQ