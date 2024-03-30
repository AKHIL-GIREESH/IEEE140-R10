import { useQueryClient } from '@tanstack/react-query'

const LeaderboardsButtons = ({setCurrent,current}) => {

    const highlightedStyle = {
        color:"#0073DD",
        backgroundColor:"white"
    }
    //const queryClient = useQueryClient()
    //queryClient.invalidateQueries(['leaderBoards'])

    return (
        <div className="landingPgButtons">
            <button style={current === "INDIVIDUAL"?highlightedStyle:null} onClick={() => {
                setCurrent("INDIVIDUAL")
                //queryClient.invalidateQueries(['leaderBoards'])
            }}>INDIVIDUAL</button>
            <button style={current === "TEAM"?{...highlightedStyle,margin:"0 2.5vw"}:{margin:"0 2.5vw"}} onClick={() => {
                setCurrent("TEAM")
                //queryClient.invalidateQueries(['leaderBoards'])
            }}>TEAM</button>
            <button style={current === "SECTION"?highlightedStyle:null} onClick={() => {
                setCurrent("SECTION")
                //queryClient.invalidateQueries(['leaderBoards'])
            }}>SECTION</button>
        </div>
    )
}   

export default LeaderboardsButtons