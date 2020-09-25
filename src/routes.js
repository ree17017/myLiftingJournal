import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//import Login from "./Login.js";

const ROUTES = [
    { path: "/", key: "HOME", exact: true, component: () => <h1>Home</h1> },
    {
        path: "",
    },
];
export default ROUTES;

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export function RenderRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    );
}

function auth(props) {
    if (!localStorage.getItem("user")) {
        alert("You need to log in to access app routes");
        return <Redirect to={"/"} />;
    }
    return <RenderRoutes {...props} />;
}
