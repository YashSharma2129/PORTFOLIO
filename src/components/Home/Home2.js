import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" data-aos="fade-right">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I am <span className="purple">Yash Sharma</span>, a
              backend-leaning full stack engineer based in{" "}
              <span className="purple">Pune, Maharashtra, India</span>.
              <br />
              <br />
              With <b className="purple">2+ years of experience</b>, I build
              scalable, production-grade systems using
              <i>
                <b className="purple"> TypeScript, Node.js, PostgreSQL, and AWS.</b>
              </i>
              <br />
              <br />
              My areas of interest include architecting robust{" "}
              <i>
                <b className="purple">Backend Systems & APIs</b>
              </i>{" "}
              and diving into fields like{" "}
              <i>
                <b className="purple">Cloud Infrastructure</b>
              </i>{" "}
              and <b className="purple">DevOps.</b>
              <br />
              <br />I enjoy building scalable backends using{" "}
              <b className="purple">Node.js & Express</b> and creating interactive
              frontends with{" "}
              <i>
                <b className="purple">React.js</b>
              </i>{" "}
              and <b className="purple">Next.js</b>.
              <br />
              <br />
              <span className="purple" style={{ fontWeight: 600 }}>8+ shipped projects</span> · <span className="purple" style={{ fontWeight: 600 }}>10+ REST APIs</span> · <span className="purple" style={{ fontWeight: 600 }}>Deployed on AWS</span>
              <br />
              <br />I believe in constantly learning, building, and owning
              systems end-to-end — from design to production!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" data-aos="fade-up">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/YashSharma2129"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/YashSharma_21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yash-sharma-a7a074236/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yash_sharma21__/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;