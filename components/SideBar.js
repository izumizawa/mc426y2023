import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import styles from "./SideBar.module.css";
import { formatAddress } from '../helpers';

const drawerWidth = 240;

function ResponsiveDrawer({ store, container, mobileOpen, handleDrawerToggle }) {
    console.log(store)
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Typography
                variant="h2"
                noWrap
                component="div"
                style={{ textAlign: 'center', margin: '1rem 0' }}
            >
                {store.name}
            </Typography>

            <div >
                <h2 className={styles.menuTitle}>Endereço</h2>
                <p className={styles.menuInfo}>{formatAddress(store)}</p>
            </div>

            <div>
                <h2 className={styles.menuTitle}>Formas de Pagamento</h2>
                <ul className={styles.menuInfo}>
                    <li>Dinheiro</li>
                    <li>Cartão de Crédito</li>
                    <li>Cartão de Débito</li>
                    <li>PIX</li>
                </ul>
            </div>

            <div>
                <h2 className={styles.menuTitle}>Horário de Atendimento</h2>
                <ul className={styles.menuInfo}>
                    <li>Segunda-feira: 08h às 13h</li>
                    <li>Terça-feira: 08h às 13h</li>
                    <li>Quarta-feira: 08h às 13h</li>
                    <li>Quinta-feira: 08h às 13h</li>
                    <li>Sexta-feira: 08h às 13h</li>
                </ul>
            </div>
        </div >
    );


    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>


        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;