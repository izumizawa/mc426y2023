import React, { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import OrderCard from "../components/OrderCard";
import { getOrdersForStore } from "../services/order";
import { useLocalStorage } from "../hooks/UseLocalStorage";

export default function OrdersPage() {
  const [dataUser] = useLocalStorage('dataUser', "")
  const { storeId } = dataUser;

  const [orders, setOrders] = useState([]);

  const updateOrders = () => {
    getOrdersForStore(storeId).then(e => {
      const newOrders = e.docs.map(o => { return { id: o.id, ...o.data() }} )
      setOrders(newOrders);
    });
  }

  useEffect(() => {
    updateOrders();
  }, []);

  const orderList = orders.map(function (o) {
    const order = {id: o.id, ...o}
    return <OrderCard key={order} order={order} updateOrders={updateOrders} />
  });

  return (
    <div>
      <AppBar />
      <Box
        sx={{
          display: "flex",
          paddingTop: "56px",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Stack direction="column" spacing={2}>
          {orderList}
        </Stack>
      </Box>
    </div>
  );
}

