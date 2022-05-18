import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import "./BecasCards.css";

import * as FuncionesBecas from "../FuncionesBecas/FuncionesBecas";

function BecasCards({ becasData, obtenerBecas }) {
  const navigate = useNavigate();

  const handleDelete = async (becaId) => {
    console.log(becaId);
    await FuncionesBecas.deleteBeca(becaId);
    obtenerBecas();
  };

  return (
    <Row xs={1} md={3} className="g-4 mx-auto">
      {becasData.map((beca) => {
        return (
          <Col className="mb-2" key={beca.id}>
            <Card style={{ width: "18rem" }} className="mx-auto">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/vector-gratis/cartel-prestamos-estudiantiles-o-becas_603843-1091.jpg?t=st=1652638503~exp=1652639103~hmac=b4369561279465254bff66e851f64a607447abc227ca811563c2f34019fef67e&w=740"
              />
              <Card.Body>
                <Card.Title>
                  <div className="d-flex">
                    <div className="p-2">{beca.nombre}</div>
                    <div className="ms-auto p-2">
                      <Button
                        variant="primary"
                        onClick={() => navigate(`/updateBeca/${beca.id}`)}
                      >
                        Editar
                      </Button>
                    </div>
                  </div>
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />
                  {beca.pais}
                </ListGroupItem>
                <ListGroupItem>
                  <FontAwesomeIcon className="me-2" icon={faSackDollar} />
                  Financiación: {beca.porcentaje_financia}
                </ListGroupItem>
                <ListGroupItem>
                  <FontAwesomeIcon className="me-2" icon={faBuildingColumns} />
                  {beca.universidad}
                </ListGroupItem>
                <ListGroupItem>
                  {Array.from({ length: beca.popularidad }).map(
                    (item, index) => {
                      return (
                        <FontAwesomeIcon
                          key={index}
                          className={"star"}
                          icon={faStar}
                        />
                      );
                    }
                  )}
                  {Array.from({ length: 5 - beca.popularidad }).map(
                    (item, index) => {
                      return (
                        <FontAwesomeIcon
                          key={index}
                          className={"starOpaca"}
                          icon={faStar}
                        />
                      );
                    }
                  )}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/BecasMasInfo/${beca.id}`)}
                  >
                    Mas Información
                  </Button>
                  <Button
                    onClick={() => beca.id && handleDelete(beca.id)}
                    variant="danger"
                  >
                    Borrar Beca
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default BecasCards;
