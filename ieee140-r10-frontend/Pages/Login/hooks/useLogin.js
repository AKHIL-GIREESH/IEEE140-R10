import { useMutation } from "@tanstack/react-query"
import { useSetAuth } from "../../../src/AuthProvider"

const useLogin = ({loginData,setAuth}) => {
    
    const loggedUser = useMutation({
        mutationFn:() => fetch("http://localhost:3000/api/v1/login",{method:"POST",body: JSON.stringify({
          username:"John Doe 2.0",
          password:"againNotPassword"
        }),headers: {
          "Content-Type": "application/json"
        }}).then(resp => resp.json()).catch(err => console.log(err)),
        onSuccess: (data) => setAuth({user:data.user.username,token:"Bearer "+data.token}),
        onError: (error) => console.error('Error during sign-up:', error)
        })

    return loggedUser
}

export default useLogin