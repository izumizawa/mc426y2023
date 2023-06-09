import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/CloseRounded";
import { editProduct } from "../../config/firebase";

export default function EditDialog(props) {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);
    const [category, setCategory] = useState(props.category);

    const handleCloseEdit = () => {
        props.setOpen(false);
    };

    const handleEdit = () => {
        const product = {
            title: title,
            price: price,
            description: description,
            category: category
        }
        editProduct(props.id, product)
        props.setOpen(false);
        props.updateProducts()
    }

    const handleChange = stateSetter => event => {
        stateSetter(event.target.value)
    }

    return (
        <Dialog open={props.open} onClose={handleCloseEdit}>
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
    )
}