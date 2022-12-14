import React from "react";
import "./FooterMain.css"
/* import Footer from '../../assets/Footer.png'; */
import logo from "../../assets/logo.png"
import { Facebook, Instagram } from "@mui/icons-material";


const FooterMain = () => {
  return (
/*     <div className="container-fluid mainFooter">
      <div class="row row1f">
        <div class="col columna1f">
          <img class="logoFooter" src={logo} />
        </div>
        <div class="col columna2f">
          <h2>Preguntas Frecuentes</h2>
          <h2>Quienes Somos</h2>
          <h2>Nuestras Redes Sociales</h2>
        </div>
      </div>
      <div class="row row2f">
        <h5>Pagina hecha con mucho ❤ por el grupo "5Digo" - Generation 2022®</h5>
      </div>
    </div> */

    <div class="container-fluid mainFooter">
      <div class="row row1f">
        <div class="col">
        <img class="logoFooter" src={logo} />
        </div>
        <div class="col columna2f">
        <h2>Preguntas Frecuentes</h2>
          <h2>Terminos y condiciones</h2>
          <div>
          <a href="https://www.facebook.com/" style={{ textDecoration: "none", color: "inherit"}}>
            <Facebook sx={{ fontSize: 80 }}/>
            </a>
            <a href="https://www.instagram.com/" style={{ textDecoration: "none", color: "inherit"}}>
            <Instagram sx={{ fontSize: 80 , marginRight:5 , marginLeft:5}}/>
            </a>
          </div>
        </div>
      </div>
      <div class="row row2f">
        <h5>Pagina hecha con mucho ❤ por el grupo "5Digo" - Generation 2022®</h5>
      </div>

    </div>
  )
}
export default FooterMain;