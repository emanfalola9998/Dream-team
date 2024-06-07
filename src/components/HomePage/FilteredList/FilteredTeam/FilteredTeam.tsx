import React from 'react'
import { TeamProps } from '../../../../types/types'
import { Link } from 'react-router-dom'

type FilteredTeamProps = {
    filteredTeam: TeamProps | undefined

}

const FilteredTeam = ({filteredTeam}: FilteredTeamProps) => {
    if (!filteredTeam) return <p>No team found!</p>



    return (
        <div className='filteredTeam-card'>
            <div className='filteredTeam-card__content'></div>
            <Link to={`dreamTeam/${filteredTeam.id}`}>
                <h1 className='filteredTeam-card__content-heading'>{filteredTeam.TeamName.length > 24 ? (()=> {
                    let sliceAt = filteredTeam.TeamName.indexOf(" ", 12);
                    if(sliceAt === -1){
                        return sliceAt = 24;
                    }
                    return filteredTeam.TeamName.substring(0, sliceAt)
                })(): filteredTeam.TeamName ?? "No Name given"}
                </h1>

            </Link>
            <p>Budget: {filteredTeam.budget}</p>
        </div>
    )
}

export default FilteredTeam
