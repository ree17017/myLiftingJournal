import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//import Login from "./Login.js";

const ROUTES = [
    { path: "/", key: "Home", exact: true, component: () => <h1 data-testid="home-page">Home</h1> },
    {
        path: "/login",
        key: "Login",
        exact: true,
        component: () => <h1 data-testid="login-page">LOGIN</h1>,
    },
    {
        path: "/registration",
        key: "Registration",
        exact: true,
        component: () => <h1 data-testid="registration-page">Registration</h1>,
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
            <Route component={() => <h1 data-testid="not-found">Not Found!</h1>} />
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
