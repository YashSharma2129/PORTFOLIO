import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import illusora from "../../Assets/Projects/illusora.png";
import omrestocks from "../../Assets/Projects/omrestocks.png";
import studytable from "../../Assets/Projects/studytable.png";
import hotel from "../../Assets/Projects/hotel.jpg";
import shorturl from "../../Assets/Projects/shorturl.png";
import yashify from "../../Assets/Projects/Yashifyy.png";
import isl from "../../Assets/Projects/isl.png";
import openCVProject from "../../Assets/Projects/openCVProject.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-up">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={illusora}
              isBlog={false}
              title="Illusora"
              description="Production web platform for a handcrafted jewelry startup. Solely designed and delivered the complete website including public-facing pages, authentication flows, internal admin dashboards, SEO optimizations, and Google Analytics. Deployed on AWS EC2 & RDS."
              techStack={["React", "Node.js", "Express", "AWS EC2", "RDS", "SEO"]}
              demoLink="https://illusora.com/"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={omrestocks}
              isBlog={false}
              title="OMRE (OM Restocks)"
              description="AI-powered stock analytics platform combining 12 years of historical data, institutional patterns, and news sentiment into a single stability score. Features include real-time market indices, stock screener, paper trading, leaderboard, and AI predictions."
              techStack={["TypeScript", "Next.js", "PostgreSQL", "Redis", "Python", "AWS"]}
              demoLink="https://omrestocks.com/"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={studytable}
              isBlog={false}
              title="StudyTable AI"
              description="EdTech platform providing AI-powered study guidance for Board and Entrance exams (JEE, NEET, BITSAT, etc.). Built the complete website and backend, including smart scheduling, daily practice tracking, blogs, sample papers, and college counselling features. Handled full deployment and DevOps."
              techStack={["React", "Node.js", "MongoDB", "Express", "AWS", "DevOps"]}
              demoLink="https://studytable.ai/"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={yashify}
              isBlog={false}
              title="Leitner System"
              description="Flashcard-based learning platform implementing spaced repetition algorithms for efficient knowledge retention. Built with a full-stack architecture for managing decks, tracking progress, and optimizing review schedules."
              techStack={["React", "Node.js", "MongoDB", "Express"]}
              ghLink="https://github.com/YashSharma2129/Yashify"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Greencart"
              description="Logistics and order management platform with driver assignment, delivery tracking, and real-time order status updates. Built for efficient last-mile delivery operations."
              techStack={["React", "Node.js", "PostgreSQL", "Prisma", "Vercel"]}
              demoLink="https://greencart-frontend-sage.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={openCVProject}
              isBlog={false}
              title="AI Buddy"
              description="AI-powered fitness assistant with posture detection and repetition tracking using computer vision. Integrates Flask backend with React frontend, leveraging OpenCV and MediaPipe for real-time exercise analysis."
              techStack={["Python", "Flask", "OpenCV", "MediaPipe", "React"]}
            />
          </Col>

          <Col md={4} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={isl}
              isBlog={false}
              title="Talenrn LMS"
              description="Learning Management System with authentication, role-based dashboards, and course workflows. Features student/mentor interfaces, real-time WebSocket features, and cloud deployments on AWS."
              techStack={["TypeScript", "Node.js", "React", "MongoDB", "WebSocket", "AWS"]}
              demoLink="https://talenrn-lms-frontend.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={shorturl}
              isBlog={false}
              title="Short URL"
              description="A platform to shorten URLs and manage them with easy access to the link statistics."
              techStack={["Node.js", "Express", "MongoDB", "EJS"]}
              ghLink="https://github.com/YashSharma2129/short_URl"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
