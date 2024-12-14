import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi Everyone, I am <span className="purple">Yash Sharma</span> 
    from <span className="purple">Delhi NCR, India.</span>
    <br />
    I am a dedicated <span className="purple">Full Stack Developer</span> and 
    <span className="purple"> Full Stack Developer</span>
    <br />
    I am currently pursuing a <span className="purple">B.Tech in IT</span> at 
    KIET Group of Institutions, graduating in 2026.
    <br />
    <br />
    Apart from coding, some other activities that I love to do!
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Traveling and Exploring New Places
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Strive to create solutions that make an impact!"{" "}
  </p>
  <footer className="blockquote-footer">Yash Sharma</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
