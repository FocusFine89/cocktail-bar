import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCocktailAction } from "../redux/actions/getCocktailAction";

const HomePage = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector((state) => state.cocktails.content);
  useEffect(() => {
    dispatch(getCocktailAction("Vodka"));
  }, []);
  return (
    <Row className="mt-5">
      <Col xs={12} md={8} className=" m-auto">
        <input />
        <Container>
          <Row className="border border-dark">
            {cocktails.length > 0 &&
              cocktails.map((cocktail) => {
                return (
                  <Col xs={12} md={6} lg={3} key={cocktail.idDrink}>
                    <Card className="my-3" key={cocktail.idDrink}>
                      <Card.Img variant="top" src={cocktail.strDrinkThumb} />
                      <Card.Body>
                        <Card.Title>{cocktail.strDrink}</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default HomePage;
