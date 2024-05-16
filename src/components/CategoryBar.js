'use client';
import { useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { FormControl, InputLabel, Select, ListItemIcon, ListItemText } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import MenuList from '@mui/material/MenuList';


function CategoryBar() {
  const categoryList = [
    'Home',
    'Clothing',
    'Brand',
    'Sneakers',
    'Accessories',
    'Jeans',
    'On sales'
  ]
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4
          }}
        >
          {
            categoryList.map((category) => (
              <Typography size='small' sx={{ '&:hover': { cursor: 'pointer', borderBottom: '1px solid white' } }}>
                {category}
              </Typography>
            ))
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CategoryBar;