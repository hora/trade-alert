import './Alert.css';

function Alert({teamA, teamB}) {

  return (
    <div className="Alert">
      <div className="alert-container">
        <h1>Trade Alert</h1>
        <div className="alert-teams-container">
          <AlertTeam teamName={teamA} />
          <AlertTeam teamName={teamB} />
        </div>
      </div>
    </div>
  );
}

export default Alert;

function AlertTeam({teamName}) {
  return (
    <div className="AlertTeam">
      <h2>{teamName}</h2>
      <img alt="team logo" src="" />
      <ul className="assets">
        <li className="player">
          <h3>Player Name</h3>
          <h4>Player info</h4>
        </li>
        <li className="pick">
          <h3>Draft Pick</h3>
        </li>
      </ul>
    </div>
  );
}
