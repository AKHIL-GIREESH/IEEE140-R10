//import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../src/AuthProvider";
import { useTheme } from "../../src/Theme";

const Navbar = () => {
  const user = useAuth();
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div
      style={{
        position: "sticky",
        top: 10,
        width: "100vw",
        height: "8vh",
        backgroundColor: theme === "light" ? "#2C8ABF" : "#0073DD",
        zIndex: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1%",
      }}
    >
      <a href="#" style={{ color: "white", textDecoration: "none" }}>
        About
      </a>
      <a href="#" style={{ color: "white", textDecoration: "none" }}>
        Leaderboards
      </a>
      <Link to="/FAQ" style={{ color: "white", textDecoration: "none" }}>
        FAQ
      </Link>
      <Link
        to="/Login"
        style={{
          color: "white",
          textDecoration: "none",
          justifySelf: "self-end",
        }}
      >
        {user === null ? "Login" : user}
      </Link>
    </div>
  );
};

export default Navbar;
