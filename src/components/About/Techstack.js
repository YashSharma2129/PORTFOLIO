import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiGraphql,
  SiTypescript,
  SiMysql,
  SiTailwindcss,
  SiAmazonaws,
  SiNestjs,
  SiFastapi,
} from "react-icons/si";

const skills = [
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <DiJavascript1 />, label: "JavaScript" },
  { icon: <DiNodejs />, label: "Node.js" },
  { icon: <DiReact />, label: "React" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiNestjs />, label: "NestJS" },
  { icon: <SiFastapi />, label: "FastAPI" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <DiMongodb />, label: "MongoDB" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiRedis />, label: "Redis" },
  { icon: <SiAmazonaws />, label: "AWS" },
  { icon: <SiDocker />, label: "Docker" },
  { icon: <DiPython />, label: "Python" },
  { icon: <CgCPlusPlus />, label: "C++" },
  { icon: <SiGraphql />, label: "GraphQL" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <DiGit />, label: "Git" },
  { icon: <DiHtml5 />, label: "HTML5" },
  { icon: <DiCss3 />, label: "CSS3" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 50}
        >
          {skill.icon}
          <p className="tech-icon-label">{skill.label}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
