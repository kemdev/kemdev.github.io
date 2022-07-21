import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//import link from nextjs
import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import Image from "next/image";

const NavbarComp = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={`${scrolled && "scrolled"} fixed top-0`}>
      <Container>
        <Link href="/">
          <a className="navbar-brand">
            <Image src="/img/logo.svg" alt="logo" width={150} height={150} />
          </a>
        </Link>
        <div
          style={{
            opacity: scrolled ? 0 : 1,
            transition: "opacity 0.3s ease-in",
          }}
        >
          <p className="m-0 fs-6">Abdulkarim Alarmanazi</p>
          <p className="m-0 fs-6">Fullstack Web Developer</p>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/abdulkarim-alarmanazi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="icons" fontSize="large" />
              </a>
              <a
                href="https://github.com/kemdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="icons" fontSize="large" />
              </a>
            </div>
            <Link href="#contact">
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Let&apos;s Connect</span>
              </button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
