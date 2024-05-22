import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light">
      <Row>
        <Col xs={12} className="fw-bold fs-4">
          Informazioni
        </Col>
        <Col xs={12}>Chi siamo</Col>
      </Row>
    </Container>
  );
};

export default Footer;
