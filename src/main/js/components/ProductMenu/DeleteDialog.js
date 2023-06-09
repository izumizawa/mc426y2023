import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/CloseRounded";
import { deleteProductsFromCatalogue } from "../../config/firebase";

export default function DeleteDialog(props) {

    const handleCloseDelete = () => {
        props.setOpen(false);
      };
    
    const handleDelete = () => {
        deleteProductsFromCatalogue("R3o4bdUuF3Til25xtrAn", props.id)
        props.setOpen(false);
        props.updateProducts()
      }

    return (
        <Dialog open={props.open} onClose={handleCloseDelete}>
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
    )
}