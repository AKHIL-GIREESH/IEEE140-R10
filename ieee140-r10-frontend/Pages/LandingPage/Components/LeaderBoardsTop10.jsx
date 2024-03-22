const LeaderboardsTop10 = ({current}) => {

    console.log(current)
    let table = []

    for(let i=0;i<10;i++){
        table.push(
            <div style={{display:"flex",width:"60vw",borderBottom:"1px solid #c9c9c9",justifyContent:"space-evenly"}}>
                <p>Team {6+i}</p> <p>{90+i}</p>
            </div>
        )
    }

    return(
        <div style={{display:"flex",height:"120vh",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",width:"60vw",borderBottom:"1px solid #c9c9c9",marginTop:"8vh",justifyContent:"space-evenly"}}>
                <p>Team Name</p> <p>Points</p>
            </div>
            {table}
        </div>
    )
}

export default LeaderboardsTop10