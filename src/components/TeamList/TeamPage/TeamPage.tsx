import React, { useState } from 'react';
import { Lineup, PlayerProps, TeamProps } from '../../../types/types';

type TeamPageProps = {
  selectedTeam: TeamProps | undefined;
  playerData: PlayerProps[] | undefined;
};

const TeamPage: React.FC<TeamPageProps> = ({ selectedTeam, playerData }) => {
  const [lineup, setLineup] = useState<Lineup | undefined>(selectedTeam?.lineup);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [budget, setBudget] = useState<number | undefined>(selectedTeam?.budget);

  if (!selectedTeam) return <h1>No Team Selected!</h1>;
  if (!playerData) return <h1>No Players present!</h1>;

  const selectPosition = (position: string) => {
    setSelectedPosition(position);
  };

  const playerSwap = (id: number) => {
    if (selectedPosition && budget !== undefined) {
      const selectedPlayer = playerData.find(player => player.id === id);
      if (selectedPlayer && budget >= selectedPlayer.MarketValue) {
        const newLineup = { ...lineup, [selectedPosition]: selectedPlayer.PlayerName };
        setLineup(newLineup);
        setBudget(budget - selectedPlayer.MarketValue);
        setSelectedPosition(null); // Reset the selected position after swapping
      } else {
        alert("Not enough budget to acquire this player.");
      }
    }
  };

  return (
    <div>
      <div className='team-card'>
        <div className='team-card__content'>
          <h1 className='team-card__content-heading'>{selectedTeam.TeamName}</h1>
          <p className='team-card__content-span'>Budget: {budget}</p>
          <ul>
            <button onClick={() => selectPosition('GK')}>GK: {lineup?.GK}</button>
            <button onClick={() => selectPosition('LB')}>LB: {lineup?.LB}</button>
            <button onClick={() => selectPosition('CB1')}>CB1: {lineup?.CB1}</button>
            <button onClick={() => selectPosition('CB2')}>CB2: {lineup?.CB2}</button>
            <button onClick={() => selectPosition('RB')}>RB: {lineup?.RB}</button>
            <button onClick={() => selectPosition('LM')}>LM: {lineup?.LM}</button>
            <button onClick={() => selectPosition('CDM')}>CDM: {lineup?.CDM}</button>
            <button onClick={() => selectPosition('CM')}>CM: {lineup?.CM}</button>
            <button onClick={() => selectPosition('CAM')}>CAM: {lineup?.CAM}</button>
            <button onClick={() => selectPosition('RM')}>RM: {lineup?.RM}</button>
            <button onClick={() => selectPosition('ST')}>ST: {lineup?.ST}</button>
          </ul>
          {playerData.map((player) => (
            <ul key={player.id}>
              <li>
                <button onClick={() => playerSwap(player.id)}>
                  {player.PlayerName}: {player.MarketValue}
                  {player.positions.map((position) => <ul>{position}</ul>)}
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
