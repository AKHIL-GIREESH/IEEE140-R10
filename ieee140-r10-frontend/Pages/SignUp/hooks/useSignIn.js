import { useMutation } from "@tanstack/react-query"

const useSignIn = ({signUpData,setAuth}) => {
    
    const signedUser = useMutation({
        mutationFn:() => fetch("http://159.65.7.52:5000/api/auth/register/",{method:"POST",body: JSON.stringify({
          username:"John Doe 3.0",
          password:"againNotPassword"
        }),headers: {
          "Content-Type": "application/json"
        }})
        .then(resp => resp.json())
        .then(respJSON => respJSON.data)
        .catch(err => console.log(err)),
        onSuccess: () => (data) => setAuth({user:data.user.firstName,token:"Bearer "+data.token}),
        onError: (error) => console.error('Error during sign-up:', error)
        })

    return signedUser
}

export default useSignIn