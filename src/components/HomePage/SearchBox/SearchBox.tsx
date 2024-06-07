import React from 'react'
import "./SearchBox.scss"

type SearchBoxProps = {
    handleSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleHighBudget: () => void
    highBudget: boolean;
    searchTerm: string;
}

const SearchBox = ({handleHighBudget, handleSearchTerm, searchTerm, highBudget}: SearchBoxProps) => {
    return (
        <div className="filtered-teams">
            <label htmlFor='search'>
                <input
                id="search"
                value={searchTerm}
                onInput={handleSearchTerm}
                placeholder='Please enter Team name...'
                />
            </label>
            <label htmlFor='budget'>
                <input 
                type="checkbox"
                id="checkbox"
                name="checkbox"
                checked={highBudget}
                onChange={handleHighBudget}
                />
            </label>
        </div>
        
    )
}

export default SearchBox
