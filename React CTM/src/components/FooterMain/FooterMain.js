import React from "react";
import "./FooterMain.css"
/* import Footer from '../../assets/Footer.png'; */


const FooterMain = () => {
    return (
        <div className="main">
            <footer class="footer_area section_padding_130_0">
      <div class="container">
        <div class="row">

          <div class="col-12 col-sm-6 col-lg-4">
            <div class="single-footer-widget section_padding_0_130">

              <div class="footer-logo mb-3"></div>
              <h2>Cuida Tus Monedas</h2>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">

              <h5 class="widget-title">About</h5>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              <h5 class="widget-title">Support</h5>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              <h5 class="widget-title">Contact</h5>
              <div class="footer_menu">
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}
export default FooterMain;