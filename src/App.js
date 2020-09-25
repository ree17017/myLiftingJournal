import React from "react";
import ROUTES, { RenderRoutes } from "./routes";
import Menu from "./components/Menu/Menu.js";

function App() {
  return (
    <div
      data-testid="app"
      style={{ display: "flex", height: "100vh", alignItems: "stretch" }}
    >
      <Menu ROUTES={ROUTES} />
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
