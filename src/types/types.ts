export type TeamProps = {
    id: number,
    TeamName: string,
    budget: number,
    lineup: Lineup
}



export type PlayerProps = {
    id: number,
    PlayerName: string,
    MarketValue: number
}

export type Lineup = {
    GK: string,
    LB: string,
    CB1: string,
    CB2: string,
    RB: string,
    LM: string,
    CDM: string,
    CM: string,
    RM: string,
    CAM: string,
    ST: string,
}
