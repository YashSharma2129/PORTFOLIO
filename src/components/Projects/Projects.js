import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotel from "../../Assets/Projects/hotel.jpg";
import shorturl from "../../Assets/Projects/shorturl.png";
import yashify from "../../Assets/Projects/Yashifyy.png";
import isl from "../../Assets/Projects/isl.png";
import registrationForm from "../../Assets/Projects/registrationForm.png";
import openCVProject from "../../Assets/Projects/openCVProject.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yashify}
              isBlog={false}
              title="Yashify"
              description="A blogging platform where users can create detailed profiles, post blogs, and engage through comments. Features include user authentication, profile management, and tracking of followers and posts."
              ghLink="https://github.com/YashSharma2129/Yashify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={openCVProject}
              isBlog={false}
              title="AI Buddy"
              description="A project integrating Flask backend with React frontend, using OpenCV for image processing. Features AI-based enhancements and real-time image editing for a seamless user experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Management System"
              description="A database management system for handling hotel operations, including room bookings, customer records, and staff management. Built as part of a database coursework project."
              ghLink="https://github.com/YashSharma2129/Hotel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={isl}
              isBlog={false}
              title="Indian Sign Language Translator"
              description="A real-time Indian Sign Language (ISL) to text and speech translator built using Python and OpenCV, helping bridge communication gaps for the deaf and hard-of-hearing community."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shorturl}
              isBlog={false}
              title="Short URL"
              description="A platform to shorten URLs and manage them with easy access to the link statistics."
              ghLink="https://github.com/YashSharma2129/short_URl"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={registrationForm}
              isBlog={false}
              title="Registration Form"
              description="A user registration form with frontend CRUD operations. This project allows users to submit a registration form, view a list of users, and edit or delete entries. It integrates frontend form validation and communication with a backend for data storage and management."
              ghLink="https://github.com/YashSharma2129/Registraion_form" // GitHub repository link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
