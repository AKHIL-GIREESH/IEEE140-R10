import { useLogout } from "../../../src/AuthProvider"
import { useAuth } from "../../../src/AuthProvider"

const LogoutButton = () => {
    const user = useAuth()
    console.log("USer",user)

    const logout = useLogout()
    

    return <button onClick={logout} style={{backgroundColor:user?"pink":null}}>Logout</button>
}

export default LogoutButton