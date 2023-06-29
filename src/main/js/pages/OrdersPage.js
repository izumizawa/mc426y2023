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

  const [orders, setOrders] = useState({ docs: [] });

  const updateOrders = () => {
    console.log(storeId)
    getOrdersForStore(storeId).then(e => {
      setOrders(e);
    });
  }

  useEffect(() => {
    updateOrders();
  }, []);

  const orderList = orders.docs.map(function (o) {
    const order = { id: o.id, ...o.data() }
    return <OrderCard key={order.number} order={order} />
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
