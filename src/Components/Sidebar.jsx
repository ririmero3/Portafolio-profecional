import React, { useState } from 'react';
import {
    Drawer, List
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import QrCodeIcon from '@mui/icons-material/QrCode';
import CustomLinkItem from './ComponentsCustom/CustomLinkItem';
function Sidebar({ open, onClose }) {
    const [openedMenu, setOpenedMenu] = useState(null);
    
    return (
        <Drawer
            anchor={'left'}
            open={open}
            onClose={onClose}
            BackdropProps={{
                style: {
                    backgroundColor: 'transparent',
                    zIndex: 999,
                },
            }}
            PaperProps={{
                sx: {
                    backgroundColor: '#b8bedd',
                    color: 'black', 
                    width: '120px',
                    marginTop:'50px',
                    zIndex: 999,
                },
            }}
            sx={{
                zIndex: 999, // Ajusta el zIndex del Drawer
            }}
            // style={{ height: "100vh", overflowY: "auto" }}
        >
            <div style={{ }}>
                <List
                >
                    {/* Primer Menu */}
                    <CustomLinkItem
                        to="/"
                        icon={HomeIcon}
                        text="Inicio"
                        onClick={() => setOpenedMenu(openedMenu === 'menu4' ? null : 'menu4')}
                    />

                    <CustomLinkItem
                        to="/Administrar"
                        icon={QrCodeIcon}
                        text="Contactos"
                        onClick={() => setOpenedMenu(openedMenu === 'menu4' ? null : 'menu4')}
                    />
                </List>
            </div>
        </Drawer>
    );
}

export default Sidebar;
