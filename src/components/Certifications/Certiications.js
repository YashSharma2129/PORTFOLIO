import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationsCard";
import React from "react";
import Particle from "../Particle";
import { BsFillAwardFill } from "react-icons/bs";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I have earned:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="certification-card">
            <CertificationCard
              title="Postman API Fundamentals Student Expert"
              description="A certification that enhanced my understanding of APIs and backend development. This course covered key concepts related to API usage, testing, and Postman tools."
              issuer="Postman Academy"
              completionDate="September 2024"
              certLink="https://verify.skilljar.com/c/fsz4wy6y4fr3"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              title="Build an AI Text Summarizer App"
              description="In this course, I developed an AI-powered text summarizer using Replit, Node.js, Express, and the Hugging Face API."
              issuer="Postman Academy"
              completionDate="October 2024"
              certLink="https://verify.skilljar.com/c/fsz4wy6y4fr3"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              title="Career Essentials in Generative AI"
              description="A certification that provided a foundational understanding of Generative AI, including techniques and use cases for AI in various industries."
              issuer="Microsoft and LinkedIn"
              completionDate="November 2024"
              certLink="https://www.linkedin.com/learning/certificates/258f1c54debb372d954e43549ab86dc7fbcd8dd6ca51fbe57754c9642cbe99fe?u=236312842"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              title="Node.js"
              description="This certification enhanced my understanding of Node.js development, including backend APIs and integration with databases."
              issuer="LinkedIn Learning"
              completionDate="Septmeber 2024"
              certLink="https://www.linkedin.com/learning/certificates/7fbe515837163816c50c68351337d144d639ab304b1f8af12cb9707ba1c2b70b?trk=share_certificate"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              title="Become a Full-Stack Web Developer"
              description="A comprehensive learning path that covered both frontend and backend web development skills, including React, Node.js, Express, and databases."
              issuer="LinkedIn Learning"
              completionDate="December  2024"
              certLink="https://www.linkedin.com/learning/certificates/7c35ef48824186d848fb5e9a64244b7d5996d58af0b269dc087b07bba57ad83e?u=236312842"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
