import React, {useState} from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import OrderItem from "./OrderItem";
import OrderInfo from "./OrderInfo";

export default function OrderCard(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const itemList = props.order.items.map(function (item) {
    return <OrderItem item={item} />;
  });

  const expandButtonText = expanded ? "Ver menos" : "Ver mais";

  return (
    <div>
      <Card sx={{display: "flex", width: "600px"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "8px 16px",
            width: "100%",
          }}>
          {/* TIMESTAMP + NÚMERO DO PEDIDO */}
          <Typography variant="overline" color="text.secondary">
            {props.order.timestamp}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <Typography variant="subtitle1">
              Pedido nº {props.order.number}
            </Typography>
            <p>****SELECT AQUI***</p>
          </Box>
          <Divider style={{margin: "8px 0px 24px"}} />

          {/* LISTA DE ITENS DO PEDIDO */}
          {itemList}

          {/* MAIS INFOS */}
          <Button
            variant="text"
            onClick={handleExpandClick}
            style={{margin: "8px 0px 8px"}}>
            {expandButtonText}
          </Button>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <OrderInfo order={props.order} />
          </Collapse>
        </Box>
      </Card>
    </div>
  );
}
