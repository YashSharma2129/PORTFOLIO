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
  SiExpress,
  SiPrisma,
  SiJsonwebtokens,
  SiSocketdotio,
  SiFirebase,
} from "react-icons/si";

const categories = [
  {
    label: "Languages & Runtime",
    skills: [
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <DiJavascript1 />, label: "JavaScript" },
      { icon: <DiPython />, label: "Python" },
      { icon: <CgCPlusPlus />, label: "C++" },
    ],
  },
  {
    label: "Backend & API",
    skills: [
      { icon: <DiNodejs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express" },
      { icon: <SiNestjs />, label: "NestJS" },
      { icon: <SiFastapi />, label: "FastAPI" },
      { icon: <SiGraphql />, label: "GraphQL" },
      { icon: <SiJsonwebtokens />, label: "JWT" },
      { icon: <SiSocketdotio />, label: "WebSocket" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { icon: <DiReact />, label: "React" },
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <SiTailwindcss />, label: "Tailwind" },
    ],
  },
  {
    label: "Databases & Cache",
    skills: [
      { icon: <SiPostgresql />, label: "PostgreSQL" },
      { icon: <DiMongodb />, label: "MongoDB" },
      { icon: <SiMysql />, label: "MySQL" },
      { icon: <SiRedis />, label: "Redis" },
      { icon: <SiPrisma />, label: "Prisma" },
      { icon: <SiFirebase />, label: "Firebase" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { icon: <SiAmazonaws />, label: "AWS" },
      { icon: <SiDocker />, label: "Docker" },
      { icon: <DiGit />, label: "Git" },
    ],
  },
];

function Techstack() {
  return (
    <div style={{ paddingBottom: "50px" }}>
      {categories.map((category, catIdx) => (
        <div className="skill-category" key={catIdx} data-aos="fade-up" data-aos-delay={catIdx * 100}>
          <p className="skill-category-label">{category.label}</p>
          <Row style={{ justifyContent: "center" }}>
            {category.skills.map((skill, index) => (
              <Col
                xs={4}
                md={2}
                className="tech-icons"
                key={index}
              >
                {skill.icon}
                <p className="tech-icon-label">{skill.label}</p>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
