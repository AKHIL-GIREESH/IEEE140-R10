import { useQueryClient } from "@tanstack/react-query";
import { useTheme } from "../../../src/Theme";

const LeaderboardsButtons = ({ setCurrent, current }) => {
  const { theme } = useTheme();

  const highlightedStyle = {
    color: theme === "light" ? "#2C8ABF" : "#0073DD",
    backgroundColor: "white",
  };
  //const queryClient = useQueryClient()
  //queryClient.invalidateQueries(['leaderBoards'])

  return (
    <div
      className="landingPgButtons"
      style={{ backgroundColor: "light" ? "#2C8ABF" : "#0073DD" }}
    >
      <button
        style={
          current === "INDIVIDUAL"
            ? highlightedStyle
            : { backgroundColor: "light" ? "#2C8ABF" : "#0073DD" }
        }
        onClick={() => {
          setCurrent("INDIVIDUAL");
          //queryClient.invalidateQueries(['leaderBoards'])
        }}
      >
        INDIVIDUAL
      </button>
      <button
        style={
          current === "TEAM"
            ? { ...highlightedStyle, margin: "0 2.5vw" }
            : {
                margin: "0 2.5vw",
                backgroundColor: "light" ? "#2C8ABF" : "#0073DD",
              }
        }
        onClick={() => {
          setCurrent("TEAM");
          //queryClient.invalidateQueries(['leaderBoards'])
        }}
      >
        TEAM
      </button>
      <button
        style={
          current === "SECTION"
            ? highlightedStyle
            : { backgroundColor: "light" ? "#2C8ABF" : "#0073DD" }
        }
        onClick={() => {
          setCurrent("SECTION");
          //queryClient.invalidateQueries(['leaderBoards'])
        }}
      >
        SECTION
      </button>
    </div>
  );
};

export default LeaderboardsButtons;
