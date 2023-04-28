import React from "react";
import AppBar from "../components/AppBar";
import ProductList from "../components/ProductList";
import NewProductButton from "../components/NewProductButton";
import Box from "@mui/material/Box";
import { useState } from 'react';

export default function MenuPage() {
  const [reload, setReload] = useState(false)

  return (
    <div>
      <AppBar />
      <Box
        justifyContent="flex-end"
        sx={{
          display: "flex",
          paddingTop: "56px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <NewProductButton setReload={setReload} />
        <ProductList reload={reload} setReload={setReload} />
      </Box>
    </div>
  );
}
