import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import * as FuncionesBecas from "../FuncionesBecas/FuncionesBecas";

function BecasMasInfo() {
  const params = useParams();

  const INITIAL_STATE = {
    nombre: "",
    categoria: "",
    porcentaje_financia: "",
    pais: "",
    universidad: "",
    requerimientos: "",
    popularidad: "",
  };

  const [beca, setBeca] = useState(INITIAL_STATE);

  const getBeca = async (becaId) => {
    try {
      const res = await FuncionesBecas.getBeca(becaId);
      const data = await res.json();
      setBeca(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getBeca(params.id);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="card m-5">
        <h5 className="card-header">Info de la Beca</h5>
        <div className="card-body">
          <h4 className="card-title">{beca.nombre}</h4>
          <h6 className="card-title text-secondary">
            <FontAwesomeIcon className="me-2 fs-6" icon={faMapMarkerAlt} />
            {beca.pais}
          </h6>
          <h6 className="card-title text-secondary">
            <FontAwesomeIcon className="me-2" icon={faBuildingColumns} />
            {beca.universidad}
          </h6>
          <p className="card-text">{beca.requerimientos}</p>
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Categoría: {beca.categoria}</li>
              <li className="list-group-item">
                Porcentaje de financiacion: {beca.porcentaje_financia}
              </li>
              <li className="list-group-item">
                Popularidad:{" "}
                {Array.from({ length: beca.popularidad }).map((item, index) => {
                  return (
                    <FontAwesomeIcon
                      key={index}
                      className={"star"}
                      icon={faStar}
                    />
                  );
                })}
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecasMasInfo;
