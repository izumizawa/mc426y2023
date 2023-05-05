import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./contexts/UserContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import RestaurantSignUp from "./pages/restaurantSignUp/RestaurantSignUp";
import Welcome from "./pages/restaurantSignUp/Welcome";

const routes = [{ path: "/dashboard", component: <Dashboard /> }];

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/boasvindas/restaurantes" element={<Welcome />} />
          <Route path="/cadastro/restaurantes" element={<RestaurantSignUp />} />
          {routes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<PrivateRoute>{item.component}</PrivateRoute>}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
