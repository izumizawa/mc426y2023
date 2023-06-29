import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Sidebar from "../components/SideBar";
import { useNavigate, useLocation } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import { getProductsFromCatalogue } from "../services/catalogue";
import ProductCardClient from "../components/ProductCardClient";

const drawerWidth = 240;

export default function RestauranteDetails(props) {
    const navigate = useNavigate();
    const { store } = useLocation().state;

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
    const [car, setCar] = useState([]);

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        async function fetchData() {
            const { docs } = await getProductsFromCatalogue(store.id);
            const _products = docs.map(item => ({ ...item.data(), id: item.id }));
            setProducts(_products)
        }

        fetchData()
    }, [])

    const handleFinish = () => {
        navigate('/confirmacao-pedido',  { state: { car, store } })
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} >
                        <Typography variant="h2" noWrap component="div">
                            Detalhes do Restaurante
                        </Typography>
                        <Button onClick={() => navigate(-1)} style={{ background: '#FFF', color: "primary" }} >Voltar para o Inicio</Button>
                    </div>
                </Toolbar>
            </AppBar>

            <Sidebar
                store={store}
                container={container}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            />

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }} >
                    <div>
                        {products.length ? products.map((item, key) => (
                                <ProductCardClient {...item} key={key} car={car} setCar={setCar} />
                            )) :
                            <div>
                                <Card sx={{ display: 'flex', justifyContent: 'space-between', width: "600px", margin: '0 auto', padding: '1.5rem' }}>
                                    Esse restaurante não tem Produtos ainda!
                                </Card>
                            </div>
                        }
                    </div>

                    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0.5rem 1.5rem' }} >
                        <Typography variant="h2" align="center">Carrinho</Typography>
                        {car.map(item => (
                            <div>
                                <h1>{item.quantity}x {item.title}</h1>
                            </div>
                        ))}
                        <Button disabled={car.length === 0} onClick={handleFinish}>
                            Finalizar Pedido
                        </Button>
                    </Card>
                </div>
            </Box>
        </Box>
    )
}

RestauranteDetails.propTypes = {
    window: PropTypes.func,
};