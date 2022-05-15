import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BecasForm() {
  return (
    <div className="container my-4">
      <Form>
        <h1 className="my-4">Crear una Beca</h1>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre de la Beca</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de la Beca"
            maxLength="50"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Control type="text" placeholder="Categoria" maxLength="50" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="porcentajeFinancia">
          <Form.Label>Porcentaje de financiacion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Porcentaje de financiacion"
            maxLength="2"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="pais">
          <Form.Label>Pais</Form.Label>
          <Form.Control type="text" placeholder="Pais" maxLength="50" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="universidad">
          <Form.Label>Universidad</Form.Label>
          <Form.Control type="text" placeholder="Universidad" maxLength="50" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="requerimientos">
          <Form.Label>Requerimientos</Form.Label>
          <Form.Control as="textarea" rows={3} maxLength="250" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="popularidad">
          <Form.Label>Popularidad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Popularidad"
            min="1"
            max="5"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default BecasForm;
