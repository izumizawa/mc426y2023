import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./contexts/UserContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import RestaurantSignUp from "./pages/restaurantSignUp/RestaurantSignUp";

const routes = [{ path: "/dashboard", component: <Dashboard /> },
{ path: "/restaurantSignUp", component: <RestaurantSignUp /> }
];

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Login />} />
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
