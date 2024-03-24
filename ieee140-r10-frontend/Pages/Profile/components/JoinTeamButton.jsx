import useJoinTeam from "../hooks/useJoinTeam"

const JoinTeamButton = ({team}) => {

    const Team = useJoinTeam(team)

    const handleClick = async () => {
        newTeam = await Team.mutateAsync()
    }

    return <button onClick={handleClick}>Join</button>
}

export default JoinTeamButton