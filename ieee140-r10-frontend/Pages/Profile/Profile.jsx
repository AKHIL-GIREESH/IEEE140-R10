import { useState } from "react";
import CreateTeamButton from "./components/CreateTeamButton";
import JoinTeamButton from "./components/JoinTeamButton";

const Profile = () => {
  const [createTeam, setCreateTeam] = useState(false);
  const [team, setTeam] = useState("");

  const [joinTeam, setJoinTeam] = useState(false);
  const [jteam, setJTeam] = useState("");

  const handleChange = ({ target }) => {
    setTeam(target.value);
  };

  const handleChangeJoin = ({ target }) => {
    setJTeam(target.value);
  };

  return (
    <>
      <h1>Profile</h1>
      <button onClick={() => setCreateTeam((prev) => !prev)}>
        Create Team
      </button>
      {createTeam && (
        <div style={{ border: "1px solid black" }}>
          <input type="text" name="name" value={team} onChange={handleChange} />
          <CreateTeamButton team={team} />
          {/* <input type="text" name="" value="" onChange={handleChange}/> */}
        </div>
      )}
      <br/>
      <button onClick={() => setJoinTeam((prev => !prev))}>Join Team</button>
      {joinTeam && (
        <div style={{ border: "1px solid black" }}>
          <input type="text" name="name" value={jteam} onChange={handleChangeJoin} />
          <JoinTeamButton team={jteam} />
        </div>
      )}
    </>
  );
};

export default Profile;
