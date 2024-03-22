import { useState } from 'react'
import '../Styles/LandingPg.css'

const Leaderboards = () => {
    const [current,setCurrent] = useState("TEAM")
    const highlightedStyle = {
        color:"#0073DD",
        backgroundColor:"white"
    }

    let table = []

    for(let i=0;i<10;i++){
        table.push(
            <div style={{display:"flex",width:"60vw",borderBottom:"1px solid #c9c9c9",justifyContent:"space-evenly"}}>
                <p>Team {6+i}</p> <p>{90+i}</p>
            </div>
        )
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
                <div style={{display:"flex",width:"60vw",borderBottom:"1px solid #c9c9c9",marginTop:"8vh",justifyContent:"space-evenly"}}>
                    <p>Team Name</p> <p>Points</p>
                </div>
                { 
                    table
                }
            </div>
        </div>
    )
}

export default Leaderboards