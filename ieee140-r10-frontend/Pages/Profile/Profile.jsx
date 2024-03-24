import { useState } from "react"
import CreateTeamButton from "./components/CreateTeamButton"

const Profile = () => {

    const [createTeam,setCreateTeam] = useState(false)
    const [team,setTeam] = useState("")

    const handleChange = ({target}) => {
        setTeam(target.value)
    }

    return(
        <>
            <h1>Profile</h1>
            <button onClick={() => setCreateTeam(prev => !prev)}>Create Team</button>
            {createTeam && <div style={{border:"1px solid black"}}>
                <input type="text" name="name" value={team} onChange={handleChange}/>
                <CreateTeamButton team={team}/>
                {/* <input type="text" name="" value="" onChange={handleChange}/> */}
            </div>}
        </>
        
    )
}

export default Profile