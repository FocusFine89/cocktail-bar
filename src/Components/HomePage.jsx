import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <Row className="mt-5">
      <Col xs={12} md={8} className="border border-dark m-auto">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={3}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default HomePage;
