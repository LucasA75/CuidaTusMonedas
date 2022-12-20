import React from "react";
import background from "../../assets/FondoLogin.png";
import "./FondoLogin.css";

const FondoLogin = () => {
  return (
    <main>
      <img
        className="FondoLogin"
        src={background}
        alt="aaa"
        style={{
          position: "fixed",
          zIndex: -1,
          width: "100%",
          height: "100%",
          // backgroundPosition:
          // backgroundRepeat:
          // backgroundSize:
          // backgroundRepeat:
          // backgroundAttachment:
        }}
      />
    </main>
  );
};

const Rectangulo = () => {
  return(
    <div 
    class="rectangulo23">
    </div>
  )
}

const RectanguloRegistro = () =>{
  return(
    <div 
    class="rectangulo32">
    </div>
  )

}

export {FondoLogin , Rectangulo, RectanguloRegistro};
