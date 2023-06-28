import React from "react";
import AppBar from "../components/AppBar";
import ProductList from "../components/ProductList";
import NewProductButton from "../components/NewProductButton";
import Box from "@mui/material/Box";
import {useState} from "react";

export default function OrdersPage() {
  const [reload, setReload] = useState(false);

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
        }}></Box>
    </div>
  );
}
