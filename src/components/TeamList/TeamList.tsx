import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { PlayerProps, TeamProps } from "../../types/types"
import TeamPage from "./TeamPage/TeamPage"

type TeamListProps = {
    teamData: TeamProps[] | undefined
    setHasTeamBeenSelected: React.Dispatch<React.SetStateAction<boolean>>
    playerData: PlayerProps[] | undefined
}

const TeamList = ({teamData, setHasTeamBeenSelected, playerData}: TeamListProps) => {
    if(!teamData) return <p>No Teams!!</p>
    const {teamId} = useParams();

    if(!teamId) return <p>No Teams!!</p>
    const selectedTeam = teamData.find((team) => team.id === parseInt(teamId));

    useEffect(() => {
        return () => {
        setHasTeamBeenSelected(false)
        };
    }, [setHasTeamBeenSelected]);
    
    if (!selectedTeam) return <h1>No Team Selected!</h1>

    return (
        <div>
            When a team is picked you will be located to this page.
            <div>{selectedTeam && <TeamPage selectedTeam = {selectedTeam} playerData={playerData} />}</div>
        </div>
    )
}

export default TeamList
