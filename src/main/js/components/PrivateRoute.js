import React, {useContext} from "react";
import {Navigate} from "react-router-dom";
import {element} from "prop-types";
import {UserContext} from "../contexts/UserContext";

export default function PrivateRoute({children}) {
  const {login} = useContext(UserContext);

  return login ? children : <Navigate to="/" />;
}
PrivateRoute.propTypes = {
  children: element.isRequired,
};
