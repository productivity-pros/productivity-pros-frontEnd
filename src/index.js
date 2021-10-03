import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Auth0Provider
    domain='dev-hpy9udfn.us.auth0.com'
    clientId='5nQufsbcFUsAMHbAf5txsqUXToO2wCAO'
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);