import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query";
import ReCAPTCHA from "react-google-recaptcha";

const LoginButtons = ({loginData,setAuth,verifyMail}) => {

    // const trig = useLogin({loginData,setAuth,setHandleErr})
    
    // const loginFunc = async () => {
    //     console.log("login")
    //     const loggedIn = await trig.mutateAsync()
    //     console.log(loggedIn?.data)
    // }
    let verifyCaptcha = false

    const onChange = () => {
      verifyCaptcha = true
      console.log(verifyCaptcha)
    }

    const navi = useNavigate()

    const loggedUser = useMutation({
        mutationFn: () =>
          fetch("http://159.65.7.52:5000/api/auth/login/", {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((resp) => resp.json())
            .then((respJSON) => respJSON.data)
            .catch((err) => console.log(err)),
        onSuccess: (data) => {
            setAuth({ user: data?.user.firstName, token: "Bearer " + data?.token })
            navi('/',{replace:true})
        },
        onError: (error) => console.error("Error during sign-up:", error),
      });

      const loginFunc = () => {
        loggedUser.mutate()
      }
    
      console.log(verifyCaptcha)
    return(
        <div style={{height:"65%",border:"1px solid",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            <ReCAPTCHA
                sitekey="6Leqq6gpAAAAAL617ua6e5nwhGkvEFkT_cAEv4dP"
                onChange={onChange}
                theme="dark light"
            />
            <button className="DisabledButton" onClick={loginFunc} disabled={Object.values(loginData).includes("") || !verifyMail || !verifyCaptcha || loginData.password.length < 1}>{loggedUser.isPending?"Loading":"LOGIN"}</button>
            <p><Link to="/SignUpChoice" style={{textDecoration:"none",color:"white"}}>Create an Account →</Link></p>
            {loggedUser.isError && <p>Oops Wrong Credentials!</p>}
        </div>
    )
}

export default LoginButtons