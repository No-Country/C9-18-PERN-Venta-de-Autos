import React from 'react';

const Footer = () => {
  return (


    <footer className="text-center text-lg-start text-muted " style={{ background: "#3A9EFD" }}>
      <section className="d-flex justify-content-center p-4">      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4 text-white" style={{fontSize: "150%"}}>
                Comprar
              </h6>

              <p>
                <a href="#!" className="text-white text-decoration-none">Buscar por categoria</a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">Ver todo el inventario</a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">Encontrar por palabra clave</a>
              </p>


            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4 text-white" style={{fontSize: "150%"}}>
                VENDER / <br /> CAMBIAR
              </h6>
              <p>
                <a href="#!" className="text-white text-decoration-none">Cotizar</a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">Publicar</a>
              </p>

            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">

              <h6 className="text-uppercase fw-bold mb-4 text-white" style={{fontSize: "150%"}}>
                Acerca de
              </h6>
              <p>
                <a href="#!" className="text-white  text-decoration-none">Nosotros</a>
              </p>
              <p>
                <a href="#!" className="text-white  text-decoration-none">Terminos y condiciones</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4 text-white" style={{fontSize: "150%"}}>
                Mas
              </h6>
              <p>
                <a href="#!" className="text-white text-decoration-none">FAQ</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 className="text-uppercase fw-bold mb-4 text-white" style={{fontSize: "150%"}}>AUTOSUSADOS.COM</h6>
            </div>

          </div>

        </div>
      </section>


    </footer>

  );
};

export default Footer;