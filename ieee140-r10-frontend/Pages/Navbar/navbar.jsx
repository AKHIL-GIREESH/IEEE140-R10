import { Link } from "react-router-dom";
import { useAuth } from "../../src/AuthProvider";

const Navbar = () => {
  const user = useAuth();
  return (
    <div
      style={{
        position: "sticky",
        top: 10,
        width: "100vw",
        height: "8vh",
        border: "1px solid",
        backgroundColor: "rgba(255,255,255,0.8)",
        zIndex: 3,
      }}
    >
      <Link to="/FAQ">FAQ</Link>
      <a href="#">Leaderboards</a>
      <Link to="/Login" style={{ color: "black" }}>
        {user === null ? "Login" : user}
      </Link>
    </div>
  );
};

export default Navbar;
