import React from "react";
import { useState, useEffect } from "react";
import BecasCards from "../BecasCards/BecasCards";

function BecasList() {
  const [becasData, setBecasData] = useState([]);

  const obtenerBecas = () => {
    fetch(`http://localhost:8000/api/beca/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBecasData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("algo salio mal con el API becas: " + error.message);
      });
  };

  useEffect(() => {
    obtenerBecas();
  }, []);

  return (
    <div>
      <h1>Becas de maestría.</h1>
      <div>
        <BecasCards becasData={becasData} obtenerBecas={obtenerBecas} />
      </div>
    </div>
  );
}

export default BecasList;
