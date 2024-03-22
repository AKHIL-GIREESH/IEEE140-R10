import { useState } from 'react'
import '../Styles/LandingPg.css'
import LeaderboardsButtons from './LeaderBoardsButtons'
import LeaderboardsTop10 from './LeaderBoardsTop10'

const Leaderboards = () => {
    const [current,setCurrent] = useState("TEAM")

    return(
        <div style={{height:"150vh",width:"90vw",marginLeft:"5vw"}}>
            <h1>Leaderboards</h1>
            <LeaderboardsButtons setCurrent={setCurrent} current={current}/>
            <LeaderboardsTop10 current={current}/>
        </div>
    )
}

export default Leaderboards