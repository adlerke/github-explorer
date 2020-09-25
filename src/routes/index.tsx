// eslint-disable-next-line no-use-before-define
import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "../pages/Home";
import DetailsScreen from "../pages/Details";

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/details/:repositories+" component={DetailsScreen} />
    </Switch>
);
export default Routes;
