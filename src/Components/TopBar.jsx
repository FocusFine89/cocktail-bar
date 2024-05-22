import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TopBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container fluid>
          <img src="./n.png" alt="" className="logo-navbar" />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features" className="">
              Favourits
            </Nav.Link>
            <Nav.Link href="#pricing">About Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
