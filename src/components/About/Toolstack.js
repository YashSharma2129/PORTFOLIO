import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiLinux,
  SiGit,
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiPrisma,
  SiNginx,
  SiJest,
  SiPlaywright,
} from "react-icons/si";

const tools = [
  { icon: <SiVisualstudiocode />, label: "VS Code" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiGithubactions />, label: "Actions" },
  { icon: <SiDocker />, label: "Docker" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <SiVercel />, label: "Vercel" },
  { icon: <SiNginx />, label: "Nginx" },
  { icon: <SiPrisma />, label: "Prisma" },
  { icon: <SiLinux />, label: "Linux" },
  { icon: <SiJest />, label: "Jest" },
  { icon: <SiPlaywright />, label: "Playwright" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 50}
        >
          {tool.icon}
          <p className="tech-icon-label">{tool.label}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
