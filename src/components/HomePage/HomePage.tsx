import React from 'react'
import "./HomePage.scss";
import { TeamProps } from '../../types/types';
import FilteredTeam from './FilteredList/FilteredTeam/FilteredTeam';
import FilteredList from './FilteredList/FilteredList';
import SearchBox from './SearchBox/SearchBox';

type HomePageProps = {
    teamData: TeamProps[] | undefined
    setHighBudget: React.Dispatch<React.SetStateAction<boolean>>
    highBudget: boolean
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const HomePage = ({teamData, searchTerm, setSearchTerm, setHighBudget, highBudget}: HomePageProps) => {
    if (!teamData || teamData.length === 0) return <p>No Teams Found!</p>;

    const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.trim().toLowerCase());
    }

    const handleHighBudget = () => {
        setHighBudget(!highBudget)
    }



    return (
    <div className='home-page'>
        <div className='home-page__content'>
            <h1>Welcome to DreamTeam!</h1>
            <h3>Ready to build your dream team</h3>
            <div className='filtered__teams'>
                
                <FilteredList teamData = {teamData} highBudget = {highBudget}  searchTerm={searchTerm}/>
                <SearchBox handleSearchTerm={handleSearchTerm} handleHighBudget = {handleHighBudget} searchTerm={searchTerm} highBudget={highBudget} />

            </div>
        </div>
    </div>
    )
}

export default HomePage
