import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "./Experience.css";

const experiences = [
  {
    title: "Software Developer",
    company: "Bit Hook",
    type: "Full-Time",
    duration: "Jun 2025 – Present",
    location: "Pune, Maharashtra · On-site",
    points: [
      "Engineering backend-heavy features using TypeScript, Node.js, PostgreSQL, and AWS.",
      "Built 10+ REST APIs, background jobs, and CI/CD pipelines for production.",
      "Authored 50+ test cases; enforced JWT + RBAC authentication.",
    ],
    tech: ["TypeScript", "Node.js", "PostgreSQL", "AWS", "JWT"],
  },
  {
    title: "Software Engineer Intern",
    company: "Syncliner",
    type: "Internship",
    duration: "Jun 2025 – Jan 2026",
    location: "Bengaluru · Remote",
    points: [
      "Owned features across frontend, backend, and testing on two core products.",
      "Built a Text-to-Speech feature and reusable UI components (Notes, Keynotes, Hero).",
      "Wrote E2E tests with Playwright; participated in HLD and GTM planning.",
    ],
    tech: ["React", "Node.js", "Playwright", "TypeScript"],
  },
  {
    title: "Founding Engineer",
    company: "Illusora",
    type: "Contract",
    duration: "Nov 2025 – Dec 2025",
    location: "Remote",
    points: [
      "Solely designed and shipped illusora.com — public pages, auth, and admin dashboards.",
      "Implemented SEO, Google Analytics, and AWS EC2/RDS infrastructure.",
    ],
    tech: ["React", "Node.js", "AWS EC2", "RDS", "SEO"],
  },
  {
    title: "Software Developer Intern",
    company: "Mentorgain",
    type: "Internship",
    duration: "Oct 2025 – Dec 2025",
    location: "Mumbai · Remote",
    points: [
      "Built features using modern JavaScript/TypeScript stacks.",
      "Collaborated with cross-functional teams on debugging and feature iterations.",
    ],
    tech: ["TypeScript", "JavaScript", "React"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Esyacura Medical Technologies",
    type: "Internship",
    duration: "May 2025 – Oct 2025",
    location: "Remote",
    points: [
      "Delivered dashboards and reusable UI components with React.js & Tailwind CSS.",
      "Built video-based interfaces for internal clinical and operations teams.",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Software Developer Intern",
    company: "Truxie",
    type: "Internship",
    duration: "May 2025 – Sep 2025",
    location: "Noida · Remote",
    points: [
      "Architected a full admin panel from Figma to production-ready React + TypeScript.",
      "Integrated mock APIs (Faker.js, Mirage.js) for parallel development.",
    ],
    tech: ["React", "TypeScript", "Figma", "REST API"],
  },
  {
    title: "Coordinator",
    company: "CPBYTE",
    type: "Part-Time",
    duration: "Feb 2023 – Sep 2025",
    location: "",
    points: [
      "Mentored students in Web Development, TypeScript, React.js, and WebSockets.",
      "Strengthened leadership and technical communication skills.",
    ],
    tech: ["TypeScript", "React", "WebSocket"],
  },
  {
    title: "Software Developer Intern",
    company: "Kanbro Corporation",
    type: "Internship",
    duration: "Dec 2024 – Jun 2025",
    location: "Bengaluru · Remote",
    points: [
      "Built 2 ERP systems managing 10,000+ student records.",
      "Automated admin workflows (OTP, SMS, cron jobs) — reduced manual effort by 35%.",
    ],
    tech: ["Node.js", "PostgreSQL", "Express", "Cron"],
  },
  {
    title: "Intern",
    company: "Marketing Makhni",
    type: "Freelance",
    duration: "Sep 2024 – Nov 2024",
    location: "Remote",
    points: [
      "Assisted with Shopify e-commerce tasks and client-facing coordination.",
    ],
    tech: ["Shopify"],
  },
  {
    title: "Full Stack Developer",
    company: "Talenrn",
    type: "Freelance",
    duration: "Sep 2023 – Mar 2024",
    location: "Remote",
    points: [
      "Built backend and frontend for an LMS (TypeScript, Node.js, React, MongoDB).",
      "Implemented real-time WebSocket features and AWS deployments.",
    ],
    tech: ["TypeScript", "Node.js", "React", "MongoDB", "AWS"],
  },
];

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-up">
          My Professional <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the experiences I've gained through my roles and
          internships.
        </p>

        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <div
              className={`exp-timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              <div className="exp-timeline-dot" />
              <div className="exp-timeline-card">
                <div className="exp-timeline-header">
                  <h3 className="exp-timeline-title">{exp.title}</h3>
                  <span className="exp-timeline-badge">{exp.type}</span>
                </div>
                <h4 className="exp-timeline-company">{exp.company}</h4>
                <div className="exp-timeline-meta">
                  <span className="exp-timeline-duration">{exp.duration}</span>
                  {exp.location && (
                    <span className="exp-timeline-location">
                      {" "}
                      · {exp.location}
                    </span>
                  )}
                </div>
                <ul className="exp-timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {exp.tech && exp.tech.length > 0 && (
                  <div className="exp-tech-tags">
                    {exp.tech.map((t, i) => (
                      <span className="exp-tech-tag" key={i}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
