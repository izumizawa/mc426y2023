import React from "react";
import { AppBar, Toolbar, Typography, Button, Input, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom";


export default function Header({ search, setSearch, handleKeyDown }) {
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
                    style={{ color: " #FFF", marginRight: '8px', marginTop: '6px' }}
                >
                    Sou de um Restaurante
                </Button>
                <TextField
                    style={{ background: "#fff", borderRadius: '1rem', width: '350px' }}
                    margin="normal"
                    label="Pesquise um Restaurante"
                    fullWidth
                    size="small"
                    placeholder="Pesquise um Restaurante"
                    onChange={({ target }) => setSearch(target.value)}
                    onKeyDown={({ key }) => handleKeyDown(key)}
                    value={search}
                />
            </Toolbar>
        </AppBar >
    )
}