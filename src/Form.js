import './Form.css';

function Form({teams, teamA, teamB, setTeamA, setTeamB}) {
  return (
    <div className="Form">
      <FormTeam
        team="A"
        teams={teams}
        selectedTeam={teamA}
        onSelectTeam={setTeamA}
      />
      <FormTeam
        team="B"
        teams={teams}
        selectedTeam={teamB}
        onSelectTeam={setTeamB}
      />
    </div>
  );
}

export default Form;

function FormTeam({team, teams, onSelectTeam, selectedTeam}) {
  return (
    <div className="FormTeam">
      <h2>Team {team} Assets</h2>
      <label htmlFor="team-a-name-select">Choose a team:</label>

      <select
        name="team-name-select"
        id="team-name-select"
        onChange={(evt) => 
          onSelectTeam(evt.target.value)
        }
        defaultValue={selectedTeam}
      >
        {Object.entries(teams).map(([teamName, team], i) => {
          const key = "team-name-" + i;
          return (<option key={key} value={teamName}>{teamName}</option>);
        })}
      </select>
      <input className="team-asset" id="player1-a" type="text" placeholder="Player 1 from Team A"/>
      <input className="team-asset" id="player2-a" type="text" placeholder="Player 2 from Team A"/>
      <input className="team-asset" id="player3-a" type="text" placeholder="Player 3 from Team A"/>
      <input className="team-asset" id="player4-a" type="text" placeholder="Player 4 from Team A"/>
      <input className="team-asset" id="pick1-a" type="text" placeholder="Draft Pick 1 from Team A"/>
      <input className="team-asset" id="pick2-a" type="text" placeholder="Draft Pick 2 from Team A"/>
      <input className="team-asset" id="pick3-a" type="text" placeholder="Draft Pick 3 from Team A"/>
      <input className="team-asset" id="pick4-a" type="text" placeholder="Draft Pick 4 from Team A"/>
    </div>
  );
}
