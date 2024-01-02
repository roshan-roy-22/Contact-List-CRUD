import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="mx-auto fw-bolder  " href="#home">
            <Link style={linkStyle} to="/">
              Contact Manager
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
