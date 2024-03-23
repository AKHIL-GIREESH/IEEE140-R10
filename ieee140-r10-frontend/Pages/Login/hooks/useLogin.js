import { useMutation } from "@tanstack/react-query"
import { useSetAuth } from "../../../src/AuthProvider"

const useLogin = ({loginData,setAuth}) => {
    
    const loggedUser = useMutation({
        mutationFn:() => fetch("http://159.65.7.52:5000/api/auth/login/",{method:"POST",body: JSON.stringify({
          email: "testuser1@example.com",
          password: "password123"
        }),headers: {
          "Content-Type": "application/json"
        }})
        .then(resp => resp.json())
        .then(respJSON => respJSON.data)
        .catch(err => console.log(err)),
        onSuccess: (data) => setAuth({user:data.user.firstName,token:"Bearer "+data.token}),
        onError: (error) => console.error('Error during sign-up:', error)
        })

    return loggedUser
}

export default useLogin