import React from "react";
import profilePic from "../../../static/assets/images/auth/about-img.jpg";

export default function() {
  return (
  <div className="content-page-wrapper">

    <div 
    className="left-column" 
    style={{
      background: "url(" + profilePic + ") no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
    />
    <div className="right-column">
      Add a Bio so that you can add this to your portfolio
    </div>
  </div>
  );
}