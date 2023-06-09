import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/EditRounded";
import DeleteIcon from "@mui/icons-material/DeleteRounded";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";
import { useState } from "react";

export default function ProductCard(props) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  return (
    <div>
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
            width: "470px",
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
            <Stack direction="row" spacing={0.5}>
              <Tooltip title="Editar informações">
                <IconButton size="small" onClick={handleClickOpenEdit}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Excluir Produto">
                <IconButton size="small" onClick={handleClickOpenDelete}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
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
                align="right"
                color="primary.dark"
              >
                R$
              </Typography>
              <Typography variant="h4" align="right" color="primary">
                {props.price}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Card>
      <EditDialog
        id={props.id}
        title={props.title}
        description={props.description}
        price={props.price}
        category={props.category}
        updateProducts={props.updateProducts}
        open={openEdit}
        setOpen={setOpenEdit}
      />
      < DeleteDialog
        id={props.id}
        updateProducts={props.updateProducts}
        open={openDelete}
        setOpen={setOpenDelete}
      />
    </div>
  );
}
