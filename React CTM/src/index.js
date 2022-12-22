/* import React from "react";
import App from "./App"
import {createRoot} from "react-dom/client"

createRoot(document.getElementById("root")).render(<App/>) */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider domain="dev-0ephvi3k75n28qxy.us.auth0.com"
  clientId="he06KA8NyyqwFjdPZcrDRLUea14ALDJa" redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,

  document.querySelector("#root")
);
