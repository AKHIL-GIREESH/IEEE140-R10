import { useMutation } from "@tanstack/react-query"

const useSignIn = ({signUpData}) => {
    
    const signedUser = useMutation({
        mutationFn:() => fetch("http://localhost:3000/api/v1",{method:"POST",body: JSON.stringify({
          username:"John Doe 3.0",
          password:"againNotPassword"
        }),headers: {
          "Content-Type": "application/json"
        }}).then(resp => resp.json()).catch(err => console.log(err)),
        onSuccess: () => console.log("Works"),
        onError: (error) => console.error('Error during sign-up:', error)
        })

    return signedUser
}

export default useSignIn