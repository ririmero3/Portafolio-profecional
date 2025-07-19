import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

function CustomLinkItem({ to, icon: Icon, text, onClick }) {
    return (
        <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem onClick={onClick} button
                sx={{ padding: "2px" }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                    <Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        </Link>
    );
}

export default CustomLinkItem;
