/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCocktailAction } from "../redux/actions/getCocktailAction";
import { getDetailsAction } from "../redux/actions/getDetailsAction";
import AlertBeta from "./AlertBeta";

const HomePage = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector((state) => state.cocktails.content);
  const details = useSelector((state) => state.cocktails.details);
  const [search, setSearch] = useState("");

  const keydown = (e) => {
    if (e.key === "Enter") {
      dispatch(getCocktailAction(search));
    }
  };

  useEffect(() => {
    dispatch(getCocktailAction("Vodka"));
  }, []);
  return (
    <Row className="mt-5 overflow-x-hidden">
      <Col xs={12} md={8} className=" m-auto">
        <AlertBeta />
        <div className="mb-3 ms-3">
          <input
            className="input-search p-1 me-3"
            placeholder="cerca per ingrediente..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => keydown(e)}
          />

          <Button
            className="p-2"
            onClick={() => {
              dispatch(getCocktailAction(search));
            }}
          >
            Search
          </Button>
        </div>

        <Container>
          <Row>
            {cocktails.length > 0 &&
              cocktails.map((cocktail) => {
                return (
                  <Col xs={12} md={6} lg={3} key={cocktail.idDrink}>
                    <Card
                      className="my-3"
                      key={cocktail.idDrink}
                      onClick={() =>
                        dispatch(getDetailsAction(cocktail.idDrink))
                      }
                    >
                      <Card.Img variant="top" src={cocktail.strDrinkThumb} />
                      <Card.Body>
                        <Card.Title>{cocktail.strDrink}</Card.Title>
                        <Card.Subtitle className="text-muted mb-3">
                          Clicca per info
                        </Card.Subtitle>
                        {details && cocktail.idDrink === details.idDrink && (
                          <Card.Text>
                            <div className="fw-bold">Ingredienti:</div>
                            <Card.Subtitle>
                              {details.strIngredient1 && details.strIngredient1}
                            </Card.Subtitle>

                            <Card.Subtitle>
                              {details.strIngredient2 && details.strIngredient2}
                            </Card.Subtitle>

                            <Card.Subtitle>
                              {details.strIngredient3 && details.strIngredient3}
                            </Card.Subtitle>

                            <Card.Subtitle>
                              {details.strIngredient4 && details.strIngredient4}
                            </Card.Subtitle>

                            <Card.Subtitle>
                              {details.strIngredient5 && details.strIngredient5}
                            </Card.Subtitle>

                            <Card.Subtitle>
                              {details.strIngredient6 && details.strIngredient6}
                            </Card.Subtitle>
                          </Card.Text>
                        )}

                        {details && cocktail.idDrink === details.idDrink && (
                          <Card.Text>
                            <div className="fw-bold">
                              {details.strTags && "Tags:"}
                            </div>
                            <Card.Subtitle>
                              {details.strTags && details.strTags}
                            </Card.Subtitle>
                          </Card.Text>
                        )}
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
