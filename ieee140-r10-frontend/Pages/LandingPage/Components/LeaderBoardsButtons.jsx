const LeaderboardsButtons = ({setCurrent,current}) => {
    
    const highlightedStyle = {
        color:"#0073DD",
        backgroundColor:"white"
    }

    return (
        <div className="landingPgButtons">
            <button style={current === "INDIVIDUAL"?highlightedStyle:null} onClick={() => setCurrent("INDIVIDUAL")}>INDIVIDUAL</button>
            <button style={current === "TEAM"?{...highlightedStyle,margin:"0 2.5vw"}:{margin:"0 2.5vw"}} onClick={() => setCurrent("TEAM")}>TEAM</button>
            <button style={current === "SECTION"?highlightedStyle:null} onClick={() => setCurrent("SECTION")}>SECTION</button>
        </div>
    )
}   

export default LeaderboardsButtons