import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard"; // Create this component for individual experience entries
import Particle from "../Particle"; // Optional, remove if you don't want particle effect

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle /> {/* Keep this if you want particle effect */}
      <Container>
        <h1 className="project-heading ">
          My Professional <strong className="purple">Experience</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the experiences I’ve gained through my internships
          and work.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Experience 1 */}
          <Col md={4} className="experience-card mb-8">
            <ExperienceCard
              title="Software Developer Intern"
              company="Kanbro Corporation"
              duration="Dec 2024 - Present"
              description="Working on backend development, developing APIs, collaborating with the team for efficient deployment, and gaining hands-on experience in full-stack development."
              responsibilities={[
                "Developing and testing backend applications.",
                "Collaborating with teams for product development.",
                "Documenting code and maintaining efficiency.",
              ]}
            />
          </Col>

          {/* Experience 2 */}
          <Col md={4} className="experience-card mb-8">
            <ExperienceCard
              title="Full Stack Developer Intern"
              company="Talenrn"
              duration="Sep 2023 - Mar 2024"
              description="Worked as a full-stack developer, building applications using React, Node.js, and Express. I collaborated with teams on projects involving both frontend and backend development."
              responsibilities={[
                "Developed frontend features using React.",
                "Created backend services using Node.js and Express.",
                "Worked on MongoDB integration for data management.",
              ]}
            />
          </Col>
          <Col md={4} className="experience-card mb-8">
            <ExperienceCard
              title="NSCC Collaboration"
              company="NSCC KIET Technical Club Of KIET"
              duration="Feb 2023 - Present"
              description="Collaborating on live projects under the National Service Scheme, working on community-based tech solutions and participating in hackathons and events."
              responsibilities={[
                "Collaborating on live projects with teams.",
                "Organizing and participating in hackathons and events.",
                "Developing tech solutions for social causes.",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
