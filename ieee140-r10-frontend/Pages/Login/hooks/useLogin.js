import { useMutation } from "@tanstack/react-query";

const useLogin = ({ loginData, setAuth,setHandleErr }) => {
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
    onSuccess: (data) =>
      setAuth({ user: data.user.firstName, token: "Bearer " + data.token }),
    onError: (error) => console.error("Error during sign-up:", error),
  });

  if(loggedUser.isError){
    setHandleErr(true)
  }

  return loggedUser;
};

export default useLogin;
