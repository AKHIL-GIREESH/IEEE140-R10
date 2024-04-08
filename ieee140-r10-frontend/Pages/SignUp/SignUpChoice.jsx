import { useState } from "react";
import { MdRadioButtonChecked } from "react-icons/md"; //ticked
import { MdRadioButtonUnchecked } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTheme } from "../../src/Theme";

const SignUpChoice = () => {
  const [radio, setRadio] = useState("IEEE Member");

  let rbData = ["IEEE Member", "Non Member/Others"];

  localStorage.setItem("MemType", radio);

  const { theme } = useTheme();

  return (
    <div
      className="fullScreenDivContainer"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontSize:
            window.innerHeight > window.innerWidth ? "1.7rem" : "2.5rem",
          fontWeight: "700",
        }}
      >
        CHOOSE YOUR{" "}
        <span style={{ color: theme === "light" ? "#2C8ABF" : "#0073DD" }}>
          CATEGORY
        </span>
      </p>
      <div style={{ fontSize: "21px" }}>
        {rbData.map((item) => {
          return (
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                margin: "3vh",
                alignItems: "center",
              }}
              onClick={() => setRadio(item)}
            >
              {item === radio ? (
                <MdRadioButtonChecked
                  style={{
                    color: theme === "light" ? "#2C8ABF" : "#0073DD",
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <MdRadioButtonUnchecked
                  style={{ backgroundColor: "white", borderRadius: "50%" }}
                />
              )}
              <span style={{ marginLeft: "15px" }}>{item}</span>
            </div>
          );
        })}
        {/* <div style={{cursor:"pointer"}} onClick={}>
                    <MdRadioButtonChecked style={{color:"#0073DD"}}/>
                    <span>IEEE</span>
                </div>
                <div style={{cursor:"pointer"}}>
                    <MdRadioButtonUnchecked/>
                    <span>Non-IEEE</span><br/>
                </div> */}
      </div>
      <br />
      <div className="SignUpChoice">
        <button
          style={
            window.innerHeight > window.innerWidth
              ? {
                  width: "20vw",
                  height: "6vh",
                  backgroundColor: theme === "light" ? "#2C8ABF" : "#0073DD",
                }
              : { backgroundColor: theme === "light" ? "#2C8ABF" : "#0073DD" }
          }
        >
          <Link to="/">BACK</Link>
        </button>
        <button
          style={
            window.innerHeight > window.innerWidth
              ? {
                  width: "20vw",
                  height: "6vh",
                  backgroundColor: theme === "light" ? "#2C8ABF" : "#0073DD",
                }
              : { backgroundColor: theme === "light" ? "#2C8ABF" : "#0073DD" }
          }
        >
          <Link to="/SignUp">NEXT</Link>
        </button>
      </div>
    </div>
  );
};

export default SignUpChoice;
