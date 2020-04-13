import React from "react";
import { Route } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";

const Language = Loadable({
  loader: () => import("../ui-pages/Language"),
  loading: Loading
});

const State = Loadable({
  loader: () => import("../ui-pages/components/State"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("../ui-pages/Login"),
  loading: Loading
});

const UserHome = Loadable({
  loader: () => import("../ui-pages/UserHome"),
  loading: Loading
});

const District = Loadable({
  loader: () => import("../ui-pages/components/District"),
  loading: Loading
});

const Menu = Loadable({
  loader: () => import("../ui-pages/UserHome/components/Content/Dashboard"),
  loading: Loading
});

const MainRoutes = () => {
  return (
    <div>
      {/* <Route exact path="/" component={Login} /> */}
      <Route exact path="/" component={Language} />
      <Route path="/login" component={Login} />
      <Route path="/user-home" component={UserHome} />
    </div>
  );
};

export default MainRoutes;
