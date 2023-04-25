import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Donuts from "../assets/images/donuts.jpg";

export default function DishCard(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", width: "320px" }}>
      <CardMedia
        component="img"
        sx={{ width: 80 }}
        image={props.image}
        alt={props.image_description}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", padding: "16px" }}>
          <Typography variant="overline" noWrap="true" sx={{ width: "208px" }}>
            {props.category}
          </Typography>
          <Typography variant="subtitle2" noWrap="true" sx={{ width: "208px" }}>
            {props.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
}
