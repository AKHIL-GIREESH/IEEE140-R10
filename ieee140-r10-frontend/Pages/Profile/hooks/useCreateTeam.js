import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

const useCreateTeam = name => {
    const team = useMutation({
        mutationFn: () => fetch("http://159.65.7.52:5000/api/teams/create",{
            method:"POST",
            body:JSON.stringify({
                name:name
            }),
            headers:{
                "Content-Type": "application/json",
                "Authorization":Cookies.get("token")
            }

        })
        .then(resp => resp.json())
        .catch(err => "Something went wrong" + err)
        ,
        onSuccess: (data) => console.log(data)
    })

    return team
}

export default useCreateTeam