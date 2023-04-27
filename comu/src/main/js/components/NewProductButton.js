import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/CloseRounded";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/AddRounded";
import { addProductsToCatalogue } from "../config/firebase";

export default function NewProductButton(props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = stateSetter => event => {
    stateSetter(event.target.value);
  }

  const handleInclude = () => {
    const product = {
      title: title,
      price: price,
      description: description,
      category: category
    }
    addProductsToCatalogue("R3o4bdUuF3Til25xtrAn", product);
    props.setReload(true);
    setOpen(false);
  }

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
        sx={{ marginBottom: "32px" }}
      >
        Incluir produto ao cardápio
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ p: 2 }}>
          <Typography variant="h2" align="center">
            Incluir Produto
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
          <DialogContentText>
            Para incluir um novo produto ao seu cardápio, basta preencher os
            campos abaixo.
          </DialogContentText>
          <TextField
            required
            margin="normal"
            autoFocus="true"
            label="Nome do Produto"
            fullWidth
            size="small"
            onChange={handleChange(setTitle)}
          />
          <TextField
            required
            margin="normal"
            label="Preço"
            fullWidth
            multiline
            size="small"
            onChange={handleChange(setPrice)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
          />
          <TextField
            required
            margin="normal"
            label="Descrição"
            fullWidth
            multiline
            size="small"
            helperText="Informe melhor as pessoas sobre este produto incluindo uma breve descrição sobre ele. Você pode colocar, por exemplo, o peso e os ingredientes utilizados."
            onChange={handleChange(setDescription)}
          />
          <TextField
            required
            margin="normal"
            label="Categoria"
            fullWidth
            size="small"
            helperText="Divida seu cardápio em seções! As categorias podem ser 'Lanches', 'Sobremesas' e 'Bebidas', por exemplo."
            onChange={handleChange(setCategory)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancelar
          </Button>
          <Button onClick={handleInclude}>Incluir Produto</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
