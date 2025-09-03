import { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const TEAM_NAMES = [
    "Already Drafteds",
    "Angry Bears",
    "Bedard Should've Been Mine",
    "Bodacious Bruins",
    "Burnaby Max's",
    "California Shawnas",
    "HUGHES DO YOU THINK YOU ARE? I AM!",
    "Juuse Juicy",
    "McDigTheFuckIns💎",
    "Put It In Seider",
    "Super Makario",
    "TBD",
    "Toronto Gringos",
    "🏠 Vancouver Specials",
  ];

  const [teamA, setTeamA] = useState("🏠 Vancouver Specials");
  const [teamB, setTeamB] = useState("Already Drafteds");

  return (
    <div className="App">
      <Form
        teams={TEAM_NAMES}
        teamA={teamA}
        setTeamA={setTeamA}
        teamB={teamB}
        setTeamB={setTeamB}
      />
    </div>
  );
}

export default App;
