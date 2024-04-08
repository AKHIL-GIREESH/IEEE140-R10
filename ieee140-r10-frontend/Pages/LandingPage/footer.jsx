import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      style={{
        height: "35vh",
        width: "100%",
        color: "white",
        borderTop: "0.5px solid",
        backgroundColor: "light" ? "#2C8ABF" : "#0073DD",
      }}
    >
      <div
        style={{
          marginLeft: "2%",
          width: "96%",
          display: "flex",
          border: "1px solid",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            width: "60%",
            border: "1px solid",
            alignSelf: "flex-end",
          }}
        >
          HOME | SITEMAP/MORE SITES | CONTACT | ACCESSIBILITY |
          NON-DISCRIMINATION POLICY | IEEE ETHICS REPORTING | IEEE PRIVACY
          POLICY | TERMS
        </p>
        <div
          style={{
            border: "1px solid",
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <p style={{ fontSize: "1.2rem", fontWeight: "700" }}>FOLLOW US</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              border: "1px solid",
              width: "60%",
            }}
          >
            <AiFillFacebook />
            <FaSquareXTwitter />
            <AiFillInstagram />
            <AiFillYoutube />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          marginLeft: "20%",
          marginTop: "13vh",
          fontWeight: "300",
          width: "60%",
          fontSize: "0.9rem",
        }}
      >{`THIS IS AN OFFICIAL IEEE REGION 10 (ASIA-PACIFIC REGION) WEBSITE.© COPYRIGHT 2023 IEEE - ALL RIGHTS RESERVED. USE OF THIS WEBSITE SIGNIFIES YOUR AGREEMENT TO THE IEEE TERMS AND CONDITIONS.`}</p>
    </div>
  );
};

export default Footer;
