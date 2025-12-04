import { useState } from 'react';
import './App.css';
import Form from './Form';
import Alert from './Alert';

function App() {
  const TEAMS = {
    "Already Drafteds": {
        name: "Already Drafteds",
        logo: "",
      },
    "Angry Bears": {
        name: "Angry Bears",
        logo: "",
      },
    "Bedard Should've Been Mine": {
        name: "Bedard Should've Been Mine",
        logo: "",
      },
    "Bodacious Bruins": {
        name: "Bodacious Bruins",
        logo: "",
      },
    "Burnaby Max's": {
        name: "Burnaby Max's",
        logo: "",
      },
    "California Shawnas": {
        name: "California Shawnas",
        logo: "",
      },
    "HUGHES DO YOU THINK YOU ARE? I AM!": {
        name: "HUGHES DO YOU THINK YOU ARE? I AM!",
        logo: "",
      },
    "Juuse Juicy": {
        name: "Juuse Juicy",
        logo: "",
      },
    "McDigTheFuckIns💎": {
        name: "McDigTheFuckIns💎",
        logo: "",
      },
    "Put It In Seider": {
        name: "Put It In Seider",
        logo: "",
      },
    "Super Makario": {
        name: "Super Makario",
        logo: "",
      },
    "TBD": {
        name: "TBD",
        logo: "",
      },
    "Toronto Gringos": {
        name: "Toronto Gringos",
        logo: "",
    },
    "🏠 Vancouver Specials": {
        name: "🏠 Vancouver Specials",
        logo: "",
    },
  };

  const [teamA, setTeamA] = useState("🏠 Vancouver Specials");
  const [teamB, setTeamB] = useState("Already Drafteds");

  return (
    <div className="App">
      <Form
        teams={TEAMS}
        teamA={teamA}
        setTeamA={setTeamA}
        teamB={teamB}
        setTeamB={setTeamB}
      />
      <Alert
        teamA={teamA}
        teamB={teamB}
      />
    </div>
  );
}

export default App;
