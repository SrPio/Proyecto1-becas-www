import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function BecasCards({ becasData }) {
  return (
    <Row xs={1} md={4} className="g-4">
      {becasData.map((beca) => {
        return (
          <Col className="mb-2" key={beca.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/vector-gratis/cartel-prestamos-estudiantiles-o-becas_603843-1091.jpg?t=st=1652638503~exp=1652639103~hmac=b4369561279465254bff66e851f64a607447abc227ca811563c2f34019fef67e&w=740"
              />
              <Card.Body>
                <Card.Title>{beca.nombre}</Card.Title>
                <Card.Text>{beca.reqerimientos}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{beca.pais}</ListGroupItem>
                <ListGroupItem>{beca.porcentaje_financia}</ListGroupItem>
                <ListGroupItem>{beca.universidad}</ListGroupItem>
                <ListGroupItem>{beca.popularidad}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button variant="primary">Mas Información</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default BecasCards;
