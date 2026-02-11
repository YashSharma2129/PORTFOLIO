import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yash Sharma</span>,
            {" "}a <span className="purple">Backend-leaning Full Stack Engineer</span> based
            in <span className="purple">Pune, Maharashtra, India</span>.
            <br />
            <br />
            I have <span className="purple">2+ years of experience</span> building
            scalable, production-grade systems using{" "}
            <span className="purple">TypeScript, Node.js, PostgreSQL, and AWS</span>.
            I've worked in startup environments, owning everything from system design
            to cloud deployments and production operations.
            <br />
            <br />
            I am pursuing a <span className="purple">B.Tech in IT</span> at
            KIET Group of Institutions (AKTU), graduating in 2026 with a CGPA of 8.0/10.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Side Projects & Learning New Tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build systems that are scalable, reliable, and impactful."{" "}
          </p>
          <footer className="blockquote-footer">Yash Sharma</footer>
        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
