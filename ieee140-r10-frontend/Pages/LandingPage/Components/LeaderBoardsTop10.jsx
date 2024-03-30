import { useQuery } from "@tanstack/react-query"

const LeaderboardsTop10 = ({current}) => {

    const route = {
        "INDIVIDUAL":"individual",
        "TEAM":"teams",
        "SECTION":"section"
    }

    console.log(route[current])


    const Data = useQuery({
        queryFn:() => fetch(`http://159.65.7.52:5000/api/leaderboard/${route[current]}`).then(resp => resp.json()),
        queryKey:["leaderBoards"]
    })

    //Data.isSuccess && queryClient.invalidateQueries(['leaderBoards'])
    Data.isSuccess && console.log(Data.data)
    // let table = []

    // for(let i=0;i<10;i++){
    //     table.push(
    //         <div style={{display:"flex",width:"60vw",borderBottom:"1px solid #c9c9c9",justifyContent:"space-evenly"}}>
    //             <p>Team {6+i}</p> <p>{90+i}</p>
    //         </div>
    //     )
    // }

    // console.log(Data?.data)

    return(
        <div style={{display:"flex",height:"120vh",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",width:"60vw",borderBottom:"1px solid #c9c9c9",marginTop:"8vh",justifyContent:"space-evenly"}}>
                <p>Team Name</p> <p>Points</p>
            </div>
            {Data.isLoading && <p>Loading</p>}
            {Data.isError && <p>Error</p>}
            {/* {Data.isSuccess && <p>{Data.data?.team[0].name}</p>} */}
        </div>
    )
}

export default LeaderboardsTop10