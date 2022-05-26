import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel() {
  //https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey

  //ECOGCnm7XTBSJXpU1vel4Qxv7iAFMQ5E llave de la api

  const [noticiasPopu, setNoticiasPopu] = useState([]);

  const obtenerNoticiasPopulares = () => {
    let url =
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ECOGCnm7XTBSJXpU1vel4Qxv7iAFMQ5E";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNoticiasPopu(data.results.slice(0, 4));
        console.log(data.results.slice(0, 4));
      })
      .catch((error) => {
        console.log(
          "algo salio mal con el API nocticias populares: " + error.message
        );
      });
  };

  useEffect(() => {
    obtenerNoticiasPopulares();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div id="mycarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide-to="3"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide-to="4"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              id="item1"
              className="overlay-image"
              style={{
                backgroundImage: `url(https://img4.goodfon.com/wallpaper/nbig/c/da/the-new-york-times-niu-iork-taims-ssha-new-york-amerikanskai.jpg)`,
              }}
            ></div>
            <div className="containerCaru">
              <h1 id="item1t">Top Stories</h1>
              <p id="item1p" className="lead">
                The Top Stories API returns an array of articles currently on
                the specified section (arts, business, ...).
              </p>
            </div>
          </div>

          {noticiasPopu.map((noticia, index) => {
            return (
              <div className="carousel-item" key={index}>
                <div
                  id="item2"
                  className="overlay-image"
                  style={{
                    backgroundImage: `url(${noticia.multimedia[0].url})`,
                  }}
                ></div>
                <div className="containerCaru">
                  <h1 id="item2t">{noticia.title}</h1>
                  <p id="item2p" className="lead">
                    {noticia.abstract}
                  </p>
                  <a
                    id="item2a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={noticia.url}
                    className="btn btn-lg btn-primary"
                  >
                    Ve a la noticia
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mycarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mycarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
