import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./contexts/UserContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MenuPage from "./pages/MenuPage"
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/cardapios", component: <MenuPage /> }
];

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
