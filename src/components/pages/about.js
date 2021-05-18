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
    Hello there, you've discovered me on my profile and I welcome you in this brief about me.
    Having experience in Financial Analysis, SaaS Business Development, and Entrepreneurship, 
    these, amongst other variables, has driven me to you seeing me in this profile in pursuit of becoming a Junior Software Developer.
    {<br></br>}
    {<br></br>}
    What enthuses me about software development is the ever-growing need for making the world a better place through solving modern day problems, 
    through technology, that people face today. 
    {<br></br>}
    {<br></br>}
    I currently hold a Bachelor’s Degree from the University of Massachusetts Amherst, with a concentration in Finance, and have recently 
    received a certificate in in Full Stack Software Development from Bottega University. I love to draw, read books, and lift weights, and would
    be delighted to share more about myself if you decide to bless me with a message and connection.
    </div>
  </div>
  );
}