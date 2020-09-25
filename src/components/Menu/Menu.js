import React from "react";
import { Link, useHistory } from "react-router-dom";

function Menu(props) {
   const history = useHistory();

   function logout() {
      localStorage.removeItem("user");
      history.push("/");
   }

   return (
      <div style={{ flex: 0.3, backgroundColor: "#F2F2F2" }}>
         {displayRouteMenu(props.ROUTES)}
         <button data-testid="logout-button" onClick={logout}>
            Log Out
         </button>
      </div>
   );
}

export default Menu;

function displayRouteMenu(routes) {
   function singleRoute(route) {
      return (
         <li key={route.key}>
            <Link data-testid={route.key} to={route.path}>
               {route.key}
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
