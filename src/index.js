import React from "react";
import ReactDOM from "react-dom";

import Providers from "./providers/github-provider";

ReactDOM.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
  document.getElementById("root")
);