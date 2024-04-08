import { FAQdata } from "../../mocks/FAQ";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./FAQ.css";
import NewReq from "./components/NewReq";
import { useState } from "react";

const FAQ = () => {
  const [currentFAQ, setCurrentFAQ] = useState(false);
  return (
    //debugging
    <div
      className="fullScreenDivContainer"
      style={{
        marginLeft: window.innerHeight > window.innerWidth ? null : "3vw",
      }}
    >
      <NewReq />
      <h2>FAQ</h2>
      {FAQdata.map(({ id, Q, A }) => {
        return (
          <div
            className="glassWrapper-FAQ"
            key={id}
            onClick={() =>
              currentFAQ === id ? setCurrentFAQ(-1) : setCurrentFAQ(id)
            }
            style={
              window.innerHeight > window.innerWidth
                ? { width: "88%", marginLeft: "3%" }
                : null
            }
          >
            <div
              style={{
                fontSize:
                  window.innerHeight > window.innerWidth ? "1rem" : "1.3rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ width: "95%" }}>{Q}</div>
              {currentFAQ === id ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {currentFAQ === id && (
              <div
                style={{
                  marginTop:
                    window.innerHeight > window.innerWidth ? "5%" : "2%",
                }}
              >
                {A}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
