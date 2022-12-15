import React from "react";
import background from "../../assets/FondoLogin.png";
import "./FondoLogin.css";

const FondoLogin = () => {
  return (
    <main>
      <div class="rectangulo">

      </div>
      <img
        className="FondoLogin"
        src={background}
        alt="aaa"
        style={{
          position: "fixed",
          zIndex: -1,
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
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

export default FondoLogin;
