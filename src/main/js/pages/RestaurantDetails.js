import React from "react";
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

const drawerWidth = 240;

export default function RestauranteDetails(props) {
    const navigate = useNavigate();
    const { store } = useLocation().state;

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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
                        <Typography variant="h6" noWrap component="div">
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
            </Box>
        </Box>
    )
}

RestauranteDetails.propTypes = {
    window: PropTypes.func,
};