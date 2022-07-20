import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer className="footer" style={{ height: "10rem" }}>
      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col sm={6}>
            <div className="d-flex align-items-center">
              <img src="img/logo.svg" alt="logo" />
              <div>
                <p className="m-0 fs-5">Abdulkarim Alarmanazi</p>
                <p className="m-0 fs-6">Fullstack Web Developer</p>
              </div>
            </div>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon text-center">
              <a
                href="https://www.linkedin.com/in/abdulkarim-alarmanazi/"
                target="_blank"
              >
                <LinkedInIcon className="icons" fontSize="large" />
              </a>
              <a href="https://github.com/kemdev" target="_blank">
                <GitHubIcon className="icons" fontSize="large" />
              </a>
            <p className="fw-bold text-light m-0">Copyright&copy; 2022. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
