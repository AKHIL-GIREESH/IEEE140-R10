const Leaderboards = () => {

    let table = []

    for(let i=0;i<10;i++){
        table.push(
            <div style={{display:"flex",borderBottom:"1px solid #c9c9c9"}}>
                <p>Team {i}</p> <p style={{marginLeft:"20vw"}}>{90+i}</p>
            </div>
        )
    }

    return(
        <div style={{height:"150vh",width:"90vw",border:"1px solid",marginLeft:"5vw"}}>
            <h1>Leaderboards</h1>
            <div style={{border:"1px solid"}}>
                <button>INDIVIDUAL</button>
                <button>TEAM</button>
                <button>SECTION</button>
            </div>
            <div style={{height:"100vh",border:"1px solid"}}>
                <div style={{display:"flex",borderBottom:"1px solid #c9c9c9"}}>
                    <p>Team Name</p> <p style={{marginLeft:"20vw"}}>100</p>
                </div>
                { 
                    table
                }
            </div>
        </div>
    )
}

export default Leaderboards