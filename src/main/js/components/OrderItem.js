import React from "react";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/system";

export default function OrderItem(props) {
  const obs = () => {
    if (props.item.obs === undefined) {
      return "";
    } else {
      return (
        <Typography
          variant="body2"
          color="text.secondary"
          style={{paddingLeft: "24px", paddingTop: "8px"}}>
          <b>OBSERVAÇÕES:</b> {props.item.obs}
        </Typography>
      );
    }
  };
  
  return (
    <div style={{paddingBottom: "16px"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <p>{props.item.title}</p>
        <p>R$ {props.item.price}</p>
      </Box>
      {obs()}
    </div>
  );
}
