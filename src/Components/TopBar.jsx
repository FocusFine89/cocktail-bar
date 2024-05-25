import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="sticky-top">
        <Container fluid>
          <img src="./n.png" alt="" className="logo-navbar" />
          <Nav className="me-auto">
            <Link to="/" className="mx-4 text-dark  link-nav">
              Home
            </Link>

            <Link to="/aboutme" className="text-dark  link-nav">
              About Me
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
