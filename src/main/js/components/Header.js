import React from "react";
import { AppBar, Toolbar, Typography, Button, Input, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom";


export default function Header({ search, setSearch, handleBlur }) {
    const navigate = useNavigate();

    return (
        <AppBar style={{ background: 'transparent' }} position="static">
            <Toolbar >
                <Typography color="primary" variant="h1" style={{ flexGrow: 1 }}>
                    COMU
                </Typography>
                <Button
                    onClick={() => navigate('/boasvindas/restaurantes')}
                    variant="contained"
                    style={{ color: " #FFF" }}
                >
                    Sou de um Restaurante
                </Button>
                <TextField
                    style={{ background: "#fff", borderRadius: '1rem', width: '350px' }}
                    required
                    margin="normal"
                    label="Pesquise um Restaurante"
                    fullWidth
                    size="small"
                    placeholder="Pesquise um Restaurante"
                    onChange={({ target }) => setSearch(target.value)}
                    value={search}
                />
            </Toolbar>
        </AppBar >
    )
}