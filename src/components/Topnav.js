import React, { useState, useRef, useEffect } from "react";
import {
  Nav,
  NavDropdown,
  Container,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.png";

const Topnav = () => {
  //* main return
  return (
    <>
      <Navbar
        collapseOnSelect
        className="n"
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="zoran janjic logo"
              src={logo}
              width="200"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topnav;
