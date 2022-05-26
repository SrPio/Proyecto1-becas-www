import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import "./Noticias.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Noticias() {
  const [open, setOpen] = useState(false);

  const [noticiasData, setNoticiasData] = useState([]);

  const obtenerNoticias = () => {
    let APIkey = "Ap5YfF8rjssEvBaXtSI3Z2ypON5zurHC";
    fetch(
      `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${APIkey}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNoticiasData(data.results);
        console.log(data.results);
      });
  };

  useEffect(() => {
    obtenerNoticias();
  }, []);

  return (
    <>
      <h1>Noticias del Mundo</h1>
      <Row xs={1} md={4} className="g-4">
        {noticiasData.map((noticia) => {
          const articleDate = `${
            new Date(noticia.updated_date).getMonth() + 1
          }/${new Date(noticia.updated_date).getDate()}/${new Date(
            noticia.updated_date
          ).getFullYear()} - ${new Date(
            noticia.updated_date
          ).getHours()}:${new Date(noticia.updated_date).getMinutes()}`;
          return (
            <Col>
              <Card>
                {noticia.multimedia ? (
                  <Card.Img variant="top" src={noticia.multimedia[2].url} />
                ) : (
                  <Card.Img
                    variant="top"
                    src="https://img.freepik.com/free-photo/top-view-old-french-newspaper-pieces_23-2149318857.jpg?t=st=1652586943~exp=1652587543~hmac=1b015e3050c466708e50618857e0c641199530532dad268a693151584c26ab7e&w=740"
                  />
                )}
                <Card.Body>
                  <Card.Title className="Card-title-text">
                    {noticia.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted Card-subtitle-text">
                    {noticia.byline}
                  </Card.Subtitle>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    {open ? (
                      <div className="button-verMas">
                        <p className="parrafo-button">Ver menos</p>
                        <FontAwesomeIcon icon={faChevronUp} />
                      </div>
                    ) : (
                      <div className="button-verMas">
                        <p className="parrafo-button">Ver mas</p>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="button-verMas"
                        />
                      </div>
                    )}
                  </Button>
                  <Collapse in={open}>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <Card.Text className="bg-light border p-2 rounded">
                          {noticia.abstract}
                        </Card.Text>
                      </ListGroupItem>
                    </ListGroup>
                  </Collapse>
                </Card.Body>
                <Card.Footer className="text-muted">{articleDate}</Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Noticias;
