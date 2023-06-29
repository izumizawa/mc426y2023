import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./contexts/UserContext";

import RestauranteList from "./pages/RestauranteList";
import RestaurantDetails from './pages/RestaurantDetails';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import RestaurantSignUp from "./pages/restaurantSignUp/RestaurantSignUp";
import Welcome from "./pages/restaurantSignUp/Welcome";
import MenuPage from "./pages/MenuPage"
import OrderConfirmation from "./pages/OrderConfirmation";

const routes = [
  { path: "/", component: <RestauranteList /> },
  { path: "/restaurantes/:id", component: <RestaurantDetails /> },
  { path: "/login", component: <Login /> },
  { path: "/boasvindas/restaurantes", component: <Welcome /> },
  { path: "/cadastro/restaurantes", component: <RestaurantSignUp /> },
  { path: "/confirmacao-pedido", component: <OrderConfirmation /> },
];

const privateRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/cardapios", component: <MenuPage /> }
]

function App() {
  return (
    <HashRouter>
      <UserStorage>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<PrivateRoute>{route.component}</PrivateRoute>}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserStorage>
    </HashRouter>
  );
}

export default App;
