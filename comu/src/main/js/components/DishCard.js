import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default function DishCard(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", width: "600px" }}>
      <CardMedia
        component="img"
        sx={{ width: 130 }}
        image={props.image}
        alt={props.image_description}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "8px 16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="overline" color="primary">
            {props.category}
          </Typography>
          <IconButton size="small">
            <EditIcon fontSize="small" />
          </IconButton>
        </Box>
        <Typography variant="subtitle1">{props.title}</Typography>
        <Typography variant="body2" color="text.secondary" align="justify">
          {props.description}
        </Typography>
        <Box
          justifyContent="flex-end"
          sx={{
            display: "flex",
            paddingTop: "8px",
          }}
        >
          <Stack direction="row" spacing={0.5}>
            <Typography
              variant="overline"
              color="text.secondary"
              align="rigth"
              color="primary.dark"
            >
              R$
            </Typography>
            <Typography variant="h4" align="rigth" color="primary">
              {props.price}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
