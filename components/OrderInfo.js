import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function OrderInfo(props) {
  return (
    <div style={{paddingBottom: "8px"}}>
      {/* PAGAMENTO */}
      <Typography variant="overline">Pagamento</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <p>Valor Total</p>
        <p>
          <b>R$ {props.order.totalPrice}</b>
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <p>Forma de Pagamento</p>
        <p>{props.order.payment}</p>
      </Box>
      <Divider style={{margin: "16px 0px"}} />

      {/* DADOS DO CLIENTE */}
      <Typography variant="overline">Cliente</Typography>
      <p>{props.order.name}</p>
      <p>{props.order.contact}</p>
      <br />
      <Typography variant="overline">Endereço de entrega</Typography>
      <p>{props.order.address}</p>
    </div>
  );
}
