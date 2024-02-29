import './LandingPg.css'

const Leaderboards = () => {

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
                <button>INDIVIDUAL</button>
                <button style={{margin:"0 2.5vw"}}>TEAM</button>
                <button>SECTION</button>
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