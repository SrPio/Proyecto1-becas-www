import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as FuncionesBecas from "../FuncionesBecas/FuncionesBecas";

function BecasForm() {
  const navigate = useNavigate();
  const params = useParams();
  /* let valorSinPorcentaje = ""; */

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

  const handleInputChange = (e) => {
    setBeca({ ...beca, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* console.log(beca); */
    try {
      let res;
      if (!params.id) {
        res = await FuncionesBecas.registerBeca(beca);
        const data = await res.json();
        console.log(data);
      } else {
        await FuncionesBecas.updateBeca(params.id, beca);
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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

  /* const quitarPorcentaje = (porcentaje) => {
    const conPorcentaje = porcentaje;
    const sinPorcentaje = conPorcentaje.substring(0, conPorcentaje.length - 1);
    console.log();
    return sinPorcentaje;
  }; */

  return (
    <div className="col-md-3 mx-auto mb-5 mt-5">
      {params.id ? (
        <h2 className="mb-3 text-center">Actualizar Beca</h2>
      ) : (
        <h2 className="mb-3 text-center">Crear una Beca</h2>
      )}

      <form onSubmit={handleSubmit} className="m-4">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={beca.nombre}
            onChange={handleInputChange}
            className="form-control"
            minLength="2"
            maxLength="50"
            autoFocus
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Categoria</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nacional o Internacional"
            name="categoria"
            maxLength="50"
            value={beca.categoria}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Porcentaje de financiacion</label>
          <div className="input-group mb-3">
            <input
              type="number"
              placeholder="Porcentaje de financiacion"
              name="porcentaje_financia"
              className="form-control"
              min="1"
              max="100"
              value={beca.porcentaje_financia}
              onChange={handleInputChange}
            />
            <span className="input-group-text" id="basic-addon2">
              %
            </span>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Pais</label>
          <input
            type="text"
            className="form-control"
            name="pais"
            placeholder="Pais"
            maxLength="50"
            value={beca.pais}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Universidad</label>
          <input
            type="text"
            className="form-control"
            name="universidad"
            placeholder="Universidad"
            maxLength="50"
            value={beca.universidad}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              name="requerimientos"
              maxLength="250"
              value={beca.requerimientos}
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="floatingTextarea2">Requerimientos</label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Popularidad</label>
          <input
            type="number"
            name="popularidad"
            placeholder="Popularidad"
            min="1"
            max="5"
            value={beca.popularidad}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="d-grid gap-2">
          {params.id ? (
            <button type="submit" className="btn btn-block btn-primary">
              Actualizar beca
            </button>
          ) : (
            <button type="submit" className="btn btn-block btn-success">
              Registrar beca
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default BecasForm;
