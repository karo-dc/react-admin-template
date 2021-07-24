import { Auth0Provider } from "@auth0/auth0-react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import store from "./store";

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ""}
            redirectUri={window.location.origin}
          >
            <App />
          </Auth0Provider>
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById("root")
);
