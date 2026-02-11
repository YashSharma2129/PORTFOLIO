import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      {/* Contact CTA Section */}
      <div className="footer-cta" data-aos="fade-up">
        <h2 className="footer-cta-heading">
          Let's <span className="purple">Build</span> Something Together
        </h2>
        <p className="footer-cta-text">
          Looking for a full stack engineer who ships fast and owns systems end-to-end?
        </p>
        <a
          href="mailto:yash25578@gmail.com"
          className="footer-cta-button"
        >
          <AiOutlineMail style={{ marginBottom: "2px" }} /> Get In Touch
        </a>
      </div>

      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Yash Sharma</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} YS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/YashSharma2129"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/YashSharma_21"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/yash-sharma-a7a074236/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/yash_sharma21__/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
