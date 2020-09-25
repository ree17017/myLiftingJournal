import React from "react";
import { Link, useHistory } from "react-router-dom";
import ROUTES, { RenderRoutes } from "./routes";

function App() {
  const history = useHistory();

  function logout() {
    localStorage.removeItem("user");
    history.push("/");
  }

  return (
    <div className="">
      <div className="">
        {displayRouteMenu(ROUTES)}
        <button onClick={logout}>Log Out</button>
      </div>
      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
    </div>
  );
}

export default App;

function displayRouteMenu(routes) {
  function singleRoute(route) {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key}({route.path})
        </Link>
      </li>
    );
  }

  return (
    <ul>
      {routes.map((route) => {
        if (route.routes) {
          return (
            <React.Fragment key={route.key}>
              {singleRoute(route)}
              {displayRouteMenu(route.routes)}
            </React.Fragment>
          );
        }
        return singleRoute(route);
      })}
    </ul>
  );
}
