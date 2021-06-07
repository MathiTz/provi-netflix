import React from "react";
import { Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import Route from "./Route";

const Routes: React.FC = () => (
	<Switch>
		<Route exact path="/login" component={Login} />
		<Route exact path="/" component={Home} isPrivate />
	</Switch>
);

export { Routes };
