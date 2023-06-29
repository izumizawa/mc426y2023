import React from "react";
import AppBar from "../components/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {useState} from "react";
import OrderCard from "../components/OrderCard";

const mockOrder = [
  {
    id: "1",
    number: "6603",
    timestamp: "19/06/2023 às 18h25",
    items: [
      {
        id: "2",
        title: "PF - Feijoada Completa com Adicional de Pururuca",
        obs: "Sem cebola",
        price: "34,00",
      },
      {
        id: "3",
        title: "Coquinha Gelada – Lata de 350ml",
        price: "7,00",
      },
      {
        id: "4",
        title: "2x Pudins de Chocolate no Capricho",
        price: "15,00",
      },
    ],
    totalPrice: "56,00",
    payment: "Débito Mastercard",
    name: "Olívia Rodrigo de Souza",
    contact: "(19) 97874 - 2938",
    address: "Rua Treze de Dezembro, 22 - Casa | Barão Geraldo, Campinas – SP",
    //enfiar aquk
  },
];

export default function OrdersPage() {
  //   const [reload, setReload] = useState(false);
  const ordersList = mockOrder.map(function (order) {
    return <OrderCard order={order} />;
  });

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
        }}>
        <Stack direction="column" spacing={2}>
          {ordersList}
          {ordersList}
          {ordersList}
        </Stack>
      </Box>
    </div>
  );
}
