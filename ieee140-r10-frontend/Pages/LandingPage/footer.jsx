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
      <div style={{ marginLeft: "2%", width: "96%", display: "flex" }}>
        <p style={{ fontSize: "1.2rem", fontWeight: "600", width: "60%" }}>
          HOME | SITEMAP/MORE SITES | CONTACT | ACCESSIBILITY |
          NON-DISCRIMINATION POLICY | IEEE ETHICS REPORTING | IEEE PRIVACY
          POLICY | TERMS
        </p>
        <div>
          <p>FOLLOW US</p>
          <div>
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
