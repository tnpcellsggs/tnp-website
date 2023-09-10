import React, { useEffect, useState } from "react";

import Team2122 from "./Team2122";

function OldTeams() {
  const [teamyear, setTeamyear] = useState("2122");

  const yearSwitch = (year) => {
    switch (year) {
      case "2122":
        return <Team2122 />;
        break;

      default:
        return <Team2122 />;
        break;
    }
  };

  useEffect(() => {
    document.title = "Previous Teams | SGGS Training & Placement";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="oldteam-layout">
        <div className="oldteam-selector">
          <h3>Select year:</h3>
          <div>
            <button
              onClick={() => {
                setTeamyear("2122");
              }}
            >
              AY 21-22
            </button>
          </div>
        </div>
        <div className="oldteam-display">{yearSwitch(teamyear)}</div>
      </div>
    </>
  );
}

export default OldTeams;
