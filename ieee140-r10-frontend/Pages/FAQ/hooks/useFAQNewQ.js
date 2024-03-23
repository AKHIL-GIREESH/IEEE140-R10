import { useMutation } from "@tanstack/react-query"

const useFAQNewQ = () => {
    const newQ = useMutation({
        mutationFn:() => fetch("http://159.65.7.52:5000/api/faqs/",{method:"POST",body: JSON.stringify({
        email:"helloworld1@gmail.com",
        fullname:"john doe",
        question:"what is life ?"
     }),headers: {
          "Content-Type": "application/json"
        }})
        .then(resp => resp.json())
        .catch(err => console.log(err)),
        onSuccess: (data) => console.log(data),
        onError: (error) => console.error('Error during sign-up:', error)
    })

    return newQ
}

export default useFAQNewQ