import { useState,useEffect } from 'react'
import './Styles/LandingPg.css'
import LeaderboardsButtons from './Components/LeaderBoardsButtons'
import LeaderboardsTop10 from './Components/LeaderBoardsTop10'
import { useQueryClient } from '@tanstack/react-query'

const Leaderboards = () => {
    //const queryClient = useQueryClient()
    const [current,setCurrent] = useState("TEAM")

    const queryClient = useQueryClient()

    useEffect(() => {
        queryClient.invalidateQueries(['leaderBoards'])
    },[current])

    //queryClient.invalidateQueries(['leaderBoards'])

    return(
        <div style={{height:"150vh",width:"90vw",marginLeft:"5vw"}}>
            <h1>Leaderboards</h1>
            <LeaderboardsButtons setCurrent={setCurrent} current={current}/>
            <LeaderboardsTop10 current={current}/>
        </div>
    )
}

export default Leaderboards