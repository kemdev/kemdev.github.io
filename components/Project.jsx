import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Image from 'next/image'

import ProjectContainer from "./ProjectContainer";

export default function Project({
  highlighted,
  replicate,
  general,
  collaborated,
}) {
  return (
    <section className="project" id="projects">
      <Container fluid style={{ maxWidth: "2000px" }}>
        <Row>
          <Col size={12}>
            <h2 className="">Projects</h2>
            <p>
              While I was learning a full stack web development course, we had
              to build these websites as a practice. Most of the projects are
              vanilla html, css, and some javascript. Some of the projects are
              using React, React-Bootstrap, and Framer-Motion.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="collaborated"  transition={false}>
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="collaborated">Collaborated</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="highlighted">Highlighted</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="replicate">Replicate</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="misc">Misc</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="collaborated">
                  <ProjectContainer projects={collaborated} isExtUrl={true} />
                </Tab.Pane>
                <Tab.Pane eventKey="highlighted">
                  <ProjectContainer
                    projects={highlighted}
                    folder="highlights/"
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="replicate">
                  <ProjectContainer projects={replicate} folder="" />
                </Tab.Pane>
                <Tab.Pane eventKey="misc">
                  <Row>
                    <ProjectContainer projects={general} folder="general/" />
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <Image
        src="/img/color-sharp2.png"
        alt=""
        width="100%"
        height="100%"
        className="background-image-right"
      />
    </section>
  );
}
