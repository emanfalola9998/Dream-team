import { useState } from 'react'
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TeamData from "./data/TeamData.json"
import PlayerData from "./data/PlayerData.json"
import TeamList from './components/TeamList/TeamList'

function App() {
  const [hasTeamBeenSelected, setHasTeamBeenSelected] = useState<boolean>(false);
  const [highBudget, setHighBudget] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");


  

  return (
    <>
        <Routes>
          <Route 
          path="/dreamTeam"
          element={<HomePage 
                      teamData = {TeamData}
                      highBudget={highBudget}
                      setHighBudget={setHighBudget}
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                      />
                  }
          />
          <Route
          path="/dreamTeam/dreamTeam/:teamId"
          element={TeamData && (<TeamList playerData = {PlayerData} teamData = {TeamData} setHasTeamBeenSelected={setHasTeamBeenSelected} />)}
          />
        </Routes>
    </>
  )
}

export default App
