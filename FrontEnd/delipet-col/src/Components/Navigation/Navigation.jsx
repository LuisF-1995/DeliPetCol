"use client"
import React, { useState, useEffect, useContext } from 'react'
import "./navigation.styles.scss"

// IMPORTACION DE CONTEXTO GLOBAL SOBRE EL SITIO
import GlobalContext from '../../GlobalContext';
//MATERIAL UI
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox'; 
import MailIcon from '@mui/icons-material/Mail';
//REACT-ICONS
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'


const Navigation = () => {
  const { isMobile, mobileWidth, arrayNavItems } = useContext(GlobalContext);
  const [mobileMenuState, setMobileMenuState] = useState({top: false});
  const [anchor, setAnchor] = useState('top');

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setMobileMenuState({ ...mobileMenuState, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={"miCuenta"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary={"Mi cuenta"} />
          </ListItemButton>
        </ListItem>
        {arrayNavItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key={"closeSession"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary={"Cerrar sesión"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );


  return (
    <>
      {isMobile ?
        <nav className='headerNav'> 
          <div className='headerNav__mobile'> 
            <div onClick={toggleDrawer(anchor, true)} className='swapMenu'>
              <p>Ver Menú</p>
              <MdOutlineKeyboardDoubleArrowDown style={{transform:"scaleX(2)"}}/>
            </div>
            <SwipeableDrawer
              anchor={anchor}
              open={mobileMenuState[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </div>
        </nav>
        :
        <nav className='headerNav'>
          <ul className='navList'>
            {arrayNavItems && arrayNavItems.length > 0 &&
              arrayNavItems.map((itemNav) => (
                <li key={itemNav} className='navList__item'>
                    {itemNav}
                </li>
              ))
            }
          </ul>
        </nav>
      }
    </>
  )
}

export default Navigation