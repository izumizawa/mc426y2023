import { useState, useEffect} from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/EditRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";
import DeleteIcon from "@mui/icons-material/DeleteRounded";
import { deleteProductsFromCatalogue, editProduct } from "../config/firebase";

export default function ProductCard(props) {
  const theme = useTheme();
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);
  const [category, setCategory] = useState(props.category);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleDelete = () => {
    deleteProductsFromCatalogue("R3o4bdUuF3Til25xtrAn", props.id)
    setOpenDelete(false);
    props.updateProducts()
  }

  const handleEdit = () => {
    const product = {
      title: title,
      price: price,
      description: description,
      category: category
    }
    editProduct(props.id, product)
    setOpenEdit(false);
    props.updateProducts()
  }

  const handleChange = stateSetter => event => {
    stateSetter(event.target.value)
  }

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
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle sx={{ p: 2 }}>
          <Typography variant="h2" align="center">
            Editar Produto
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleCloseEdit}
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
            autoFocus={true}
            label="Nome do Produto"
            fullWidth
            size="small"
            onChange={handleChange(setTitle)}
            value={title}
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
            onChange={handleChange(setPrice)}
            value={price}
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
            value={description}
          />
          <TextField
            required
            margin="normal"
            label="Categoria"
            fullWidth
            size="small"
            helperText="Divida seu cardápio em seções! As categorias podem ser 'Lanches', 'Sobremesas' e 'Bebidas', por exemplo."
            onChange={handleChange(setCategory)}
            value={category}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="error">
            Cancelar
          </Button>
          <Button onClick={handleEdit}>Salvar</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle sx={{ p: 2 }}>
          <Typography variant="h2" align="center">
            Excluir Produto
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleCloseDelete}
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
            <b>Tem certeza que deseja excluir este produto do seu cardápio? </b>
            <br />
            Essa ação é irreversível. Caso você queira que este produto volte
            para o cardápio após a sua exclusão, você terá que incluí-lo
            novamente de forma manual, clicando no botão de "Incluir Produto ao
            Cardápio".
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancelar</Button>
          <Button onClick={handleDelete} color="error">
            Excluir Produto
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
