import React from "react";
import { Container } from "react-bootstrap";
import { Navbar as BSNavbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import TNPLogo from "../../img/TNP LOGO.png";
import SGGSLogo from "../../img/sggs.png";

const isLoggedIn = true;
const username = "User";

const LoginButton = () => {
  if (isLoggedIn) {
    return (
      <>
        <div className="loginbutton">
          <div style={{ marginRight: "10px" }}>
            <div style={{ fontSize: "9px" }}>Welcome,</div>
            <div style={{ fontSize: "16px" }}>{username}</div>
          </div>
          <div className="loginimg"></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link id="navlink" to="/user/login">
          <div className="loginbutton">
            <div>Login</div>
          </div>
        </Link>
      </>
    );
  }
};

export default function Navbar() {
  return (
    <>
      <BSNavbar className="navbar" bg="light" sticky="top">
        <Container>
          <BSNavbar.Brand id="navbar-brand" href="/">
            <img className="logo-img" src={SGGSLogo} alt="" />
            <span className="divider"></span>
            {/* <img className="logo-img" src={TNPLogo} alt="" /> */}
            &nbsp;
            <div className="logo-text">
              SHRI GURU GOBIND SINGHJI INSTITUTE OF ENGINEERING & TECHNOLOGY{" "}
              <br /> TRAINING & PLACEMENTS
            </div>
          </BSNavbar.Brand>
        </Container>
        <Container>
          <Nav className="desktop-navmenu ms-auto">
            <Link id="navlink" to="/">
              Home
            </Link>
            {/* <Nav.Link id="navlink" href="#">Events</Nav.Link> */}
            <Link id="navlink" to="/placements">
              Placements
            </Link>
            <Link id="navlink" to="/events">
              Events
            </Link>
            <Link id="navlink" to="/aboutus">
              About Us
            </Link>
            <Link id="navlink" to="/contactus">
              Contact Us
            </Link>
            {/* <Nav.Link id="navlink" href="#">
              <Link id="navlink" to="contactus" smooth duration={500}>
                <LoginButton />
              </Link>
            </Nav.Link> */}
          </Nav>
          <NavDropdown
            title={
              <FontAwesomeIcon className="mobile-nav-icon" icon={faBars} />
            }
            className="mobile-navmenu ms-auto"
            drop="start"
          >
            <NavDropdown.Item>
              <Link id="navlink" to="/">
                Home
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link id="navlink" to="/placements">
                Placements
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link id="navlink" to="/events">
                Events
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link id="navlink" to="/aboutus">
                About Us
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link id="navlink" to="/contactus">
                Contact Us
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </BSNavbar>
    </>
  );
}
