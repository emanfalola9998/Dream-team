import React from 'react'
import { TeamProps } from '../../../types/types'
import FilteredTeam from './FilteredTeam/FilteredTeam'

type FilteredListProps = {
    teamData: TeamProps[] | undefined
    highBudget: boolean
    searchTerm: string

}

const FilteredList = ({searchTerm, teamData, highBudget}: FilteredListProps) => {
    if (!teamData || teamData.length == 0) return <h1>No team Data!</h1>

    let filteredTeams = teamData || [];
    if(highBudget){
        filteredTeams = filteredTeams.filter((team) => team.budget >= 100000000)
    }

    if(searchTerm){
        filteredTeams = filteredTeams.filter((team)=> team.TeamName.toLowerCase().includes(searchTerm.toLowerCase()))
    }


    return (
        <div>
            {filteredTeams.map((team) => <li key={team.id}>{<FilteredTeam filteredTeam={team}/>}</li>)}
        </div>
    )
}

export default FilteredList
