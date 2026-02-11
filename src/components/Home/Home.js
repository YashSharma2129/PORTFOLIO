import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Yash Sharma</strong>
              </h1>

              <div className="availability-badge" data-aos="fade-up" data-aos-delay="300">
                <span className="availability-dot"></span>
                Open to Opportunities
              </div>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>

        {/* Stats Counter Section */}
        <Container className="stats-section" data-aos="fade-up">
          <Row className="stats-row">
            <Col xs={6} md={3} className="stats-item">
              <h2 className="stats-number">
                <AnimatedCounter end={2} suffix="+" />
              </h2>
              <p className="stats-label">Years Experience</p>
            </Col>
            <Col xs={6} md={3} className="stats-item">
              <h2 className="stats-number">
                <AnimatedCounter end={8} suffix="+" />
              </h2>
              <p className="stats-label">Projects Shipped</p>
            </Col>
            <Col xs={6} md={3} className="stats-item">
              <h2 className="stats-number">
                <AnimatedCounter end={10} suffix="+" />
              </h2>
              <p className="stats-label">REST APIs Built</p>
            </Col>
            <Col xs={6} md={3} className="stats-item">
              <h2 className="stats-number">
                <AnimatedCounter end={50} suffix="+" />
              </h2>
              <p className="stats-label">Test Cases Written</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section >
  );
}

export default Home;
