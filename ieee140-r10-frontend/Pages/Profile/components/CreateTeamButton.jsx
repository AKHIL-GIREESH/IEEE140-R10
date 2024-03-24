import useCreateTeam from "../hooks/useCreateTeam"

const CreateTeamButton = ({name}) => {
    const team = useCreateTeam(name)

    const handleClick = async() => {
        const newTeam = await team.mutateAsync()
    }

    return <button onClick={handleClick}>Create</button>
}

export default CreateTeamButton