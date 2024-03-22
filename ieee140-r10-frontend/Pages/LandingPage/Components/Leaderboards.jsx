import { useState } from 'react'
import '../Styles/LandingPg.css'
import LeaderboardsTop10 from './LeaderBoardsTop10'

const Leaderboards = () => {
    const [current,setCurrent] = useState("TEAM")
    const highlightedStyle = {
        color:"#0073DD",
        backgroundColor:"white"
    }

    

    return(
        <div style={{height:"150vh",width:"90vw",marginLeft:"5vw"}}>
            <h1>Leaderboards</h1>
            <div className="landingPgButtons">
                <button style={current === "INDIVIDUAL"?highlightedStyle:null} onClick={() => setCurrent("INDIVIDUAL")}>INDIVIDUAL</button>
                <button style={current === "TEAM"?{...highlightedStyle,margin:"0 2.5vw"}:{margin:"0 2.5vw"}} onClick={() => setCurrent("TEAM")}>TEAM</button>
                <button style={current === "SECTION"?highlightedStyle:null} onClick={() => setCurrent("SECTION")}>SECTION</button>
            </div>
            <div style={{display:"flex",height:"120vh",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
                <LeaderboardsTop10/>
            </div>
        </div>
    )
}

export default Leaderboards