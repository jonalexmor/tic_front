import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login/login";
import Inicio from "../index/index";
import PrivateRoute from "../auth/privateroute";
import Empleados from "../empleados/inicio";
import Articulos from "../articulos/articulos.buscar";
import About from "../about/about"
import Blog from "../blog/blog";
import Contact from "../contact/contact";
import Services from "../servicios/servicios";
import Store from "../visitanos/visitanos";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={["/empleados"]} component={Empleados} />
        <PrivateRoute exact path={["/articulos"]} component={Articulos} />
        <PrivateRoute exact path={["/about"]} component={About} />
        <PrivateRoute exact path={["/blog"]} component={Blog} />
        <PrivateRoute exact path={["/contact"]} component={Contact} />
        <PrivateRoute exact path={["/services"]} component={Services} />
        <PrivateRoute exact path={["/store"]} component={Store} />
        <Route exact path={["/login"]} component={Login} />
        <PrivateRoute exact path={["/", "/index"]} component={Inicio} />
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Página no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
