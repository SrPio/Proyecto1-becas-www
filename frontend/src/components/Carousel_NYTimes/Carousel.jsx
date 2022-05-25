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

    // eliminacion de la noticia vacia
    /*console.log(data.results[3].multimedia[0].url + "hola")
for (let index = 0; index < data.results.length; index++) {
    console.log(data.results[index].title)
    
}*/
    /*  for (let index = 0; index < 5; index++) {
          if (data.results[index].title === "") {
            data.results.splice(index, 1);
          }
        }

        document.getElementById("item1a").href = data.results[0].url;
        document.getElementById("item1p").innerText = data.results[0].abstract;
        document.getElementById("item1t").innerHTML = data.results[0].title;
        document.getElementById("item1").style.backgroundImage =
          'url(" ' + data.results[0].multimedia[0].url + ' ")';

        document.getElementById("item2a").href = data.results[1].url;
        document.getElementById("item2p").innerText = data.results[1].abstract;
        document.getElementById("item2t").innerHTML = data.results[1].title;
        document.getElementById("item2").style.backgroundImage =
          'url(" ' + data.results[1].multimedia[0].url + ' ")';

        document.getElementById("item3a").href = data.results[2].url;
        document.getElementById("item3p").innerText = data.results[2].abstract;
        document.getElementById("item3t").innerHTML = data.results[2].title;
        document.getElementById("item3").style.backgroundImage =
          'url(" ' + data.results[2].multimedia[0].url + ' ")';

        document.getElementById("item4a").href = data.results[3].url;
        document.getElementById("item4p").innerText = data.results[3].abstract;
        document.getElementById("item4t").innerHTML = data.results[3].title;
        document.getElementById("item4").style.backgroundImage =
          'url(" ' + data.results[3].multimedia[0].url + ' ")';

        document.getElementById("item5a").href = data.results[4].url;
        document.getElementById("item5p").innerText = data.results[4].abstract;
        document.getElementById("item5t").innerHTML = data.results[4].title;
        document.getElementById("item5").style.backgroundImage =
          'url(" ' + data.results[4].multimedia[0].url + ' ")'; 
      });*/
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
                    href={noticia.url}
                    className="btn btn-lg btn-primary"
                  >
                    Ve a la noticia
                  </a>
                </div>
              </div>
            );
          })}

          {/* <div className="carousel-item">
                <div id="item3" className="overlay-image"></div>
                <div className="containerCaru">
                  <h1 id="item3t">prueba</h1>
                  <p id="item3p" className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni nostrum obcaecati voluptatibus velit perspiciatis
                    dicta recusandae voluptas cum ratione quasi laborum, eum
                    tenetur doloremque totam quibusdam eius nihil iusto
                    reiciendis?
                  </p>
                  <a
                    id="item3a"
                    target="_blank"
                    rel="noopener"
                    href="/#"
                    className="btn btn-lg btn-primary"
                  >
                    ve a la noticia
                  </a>
                </div>
              </div> */}

          {/* <div className="carousel-item">
                <div id="item4" className="overlay-image"></div>
                <div className="containerCaru">
                  <h1 id="item4t">prueba</h1>
                  <p id="item4p" className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni nostrum obcaecati voluptatibus velit perspiciatis
                    dicta recusandae voluptas cum ratione quasi laborum, eum
                    tenetur doloremque totam quibusdam eius nihil iusto
                    reiciendis?
                  </p>
                  <a
                    id="item4a"
                    target="_blank"
                    rel="noopener"
                    href="/#"
                    className="btn btn-lg btn-primary"
                  >
                    ve a la noticia
                  </a>
                </div>
              </div> */}

          {/* <div className="carousel-item">
                <div id="item5" className="overlay-image"></div>
                <div className="containerCaru">
                  <h1 id="item5t">preuba</h1>
                  <p id="item5p" className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni nostrum obcaecati voluptatibus velit perspiciatis
                    dicta recusandae voluptas cum ratione quasi laborum, eum
                    tenetur doloremque totam quibusdam eius nihil iusto
                    reiciendis?
                  </p>
                  <a
                    id="item5a"
                    target="_blank"
                    rel="noopener"
                    href="/#"
                    className="btn btn-lg btn-primary"
                  >
                    ve a la noticia
                  </a>
                </div>
              </div> */}
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
