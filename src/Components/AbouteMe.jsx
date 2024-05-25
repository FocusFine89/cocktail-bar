import { Card, Col, Image, Row } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Row className="justify-content-center align-items-center overflow-x-hidden">
      <Col xs={12} md={5}>
        <Card className="border-0">
          <Card.Body>
            <Card.Title className="display-1">Chi Sono?</Card.Title>

            <Card.Text className="fs-4">
              <p>Nikita Ivanov</p>
              <p>Full Stack web Developer</p>
              <Card.Link
                href="https://www.linkedin.com/in/nikita-ivanov-770649294"
                target="_blank"
              >
                Linkedin
              </Card.Link>
              <Card.Link
                href="https://github.com/FocusFine89/cocktail-bar"
                target="_blank"
              >
                GitHub
              </Card.Link>
            </Card.Text>
            <Card.Text>
              <p>
                Questo sito è stato creato grazie all'API di{" "}
                <Card.Link
                  href="https://www.thecocktaildb.com/"
                  target="_blank"
                >
                  The Cocktail DB
                </Card.Link>
              </p>
              <p>
                Contattami:{" "}
                <span className="fw-bold">niivanov02@gmail.com</span>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Image src="./N.png" className="aboutme-image mb-5" />
      </Col>
    </Row>
  );
};

export default AboutMe;
