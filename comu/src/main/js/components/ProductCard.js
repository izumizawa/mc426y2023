import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/EditRounded";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/CloseRounded";

export default function ProductCard(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <Tooltip title="Editar informações">
              <IconButton size="small" onClick={handleClickOpen}>
                <EditIcon fontSize="small" />
              </IconButton>
            </Tooltip>
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ p: 2 }}>
          <Typography variant="h2" align="center">
            Editar Produto
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 10,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider variant="middle" />
        <DialogContent>
          <TextField
            required
            margin="normal"
            autoFocus="true"
            label="Nome do Produto"
            fullWidth
            size="small"
            value={props.title}
          />
          <TextField
            required
            margin="normal"
            label="Preço"
            fullWidth
            multiline
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
            value={props.price}
          />
          <TextField
            required
            margin="normal"
            label="Descrição"
            fullWidth
            multiline
            size="small"
            helperText="Informe melhor as pessoas sobre este produto incluindo uma breve descrição sobre ele. Você pode colocar, por exemplo, o peso e os ingredientes utilizados."
            value={props.description}
          />
          <TextField
            required
            margin="normal"
            label="Categoria"
            fullWidth
            size="small"
            helperText="Divida seu cardápio em seções! As categorias podem ser 'Lanches', 'Sobremesas' e 'Bebidas', por exemplo."
            value={props.category}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancelar
          </Button>
          <Button onClick={handleClose}>Incluir Produto</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
