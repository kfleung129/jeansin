'use client';
import { useState } from 'react';
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

const pages = ['Search', 'Shopping cart', 'Personal information'];
const pagesIcon = {
  'Search': SearchIcon,
  'Shopping cart': ShoppingBagIcon,
  'Personal information': PersonIcon
}

function NavBar() {
  const [language, setLanguage] = useState('en_US');
  const [openMenu, setOpenMenu] = useState(false);
  const changeLanguage = (newLanguage) => {
    localStorage.setItem('i18n', newLanguage);
    setLanguage(newLanguage);
  }

  return (
    <AppBar position="static" color='transparent' sx={{ padding: { sx: 0, md: 2 } }}>
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box display={{ xs: 'none', md: 'flex' }} alignItems='center' gap={0.5}>
            <LanguageIcon/>
            <FormControl size="small">
              <Select
                id="demo-simple-select"
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                sx={{
                  fontSize: 12,
                  minWidth: 100
                }}
              >
                <MenuItem value={'en_US'}>English</MenuItem>
                <MenuItem value={'zh_HK'}>Chinese</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box display='flex' alignItems='center' gap={0.5}>
            <AdbIcon/>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 5,
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Jeansin
            </Typography>
          </Box>

          <Box display={{ xs: 'none', md: 'flex' }} alignItems='center' gap={1.5}>
            <Tooltip title="Search">
              <IconButton color="inherit"><SearchIcon/></IconButton>
            </Tooltip>
            <Tooltip title="Shopping cart">
            <IconButton color="inherit"><ShoppingBagIcon/></IconButton>
            </Tooltip>
            <Tooltip title="Personal Information">
            <IconButton color="inherit"><PersonIcon/></IconButton>
            </Tooltip>
          </Box>
          
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpenMenu(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={openMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              open={openMenu}
              onClose={() => setOpenMenu(false)}
              sx={{
                display: { xs: 'block', md: 'none' },
                marginTop: 4
              }}
            >
              {
                pages.map((page) => {
                  const Icon = pagesIcon[page]; 
                  return (
                    <MenuItem key={page} onClick={() => setOpenMenu(false)}>
                      <Icon/>
                      <Typography size="small" textAlign="center" ml={1}>{page}</Typography>
                    </MenuItem>
                  )
                })
              }
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;