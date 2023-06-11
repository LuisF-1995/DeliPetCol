import React from 'react'
import PropTypes from 'prop-types'

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ShoppingCartHeader = ({props}) => {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={4} color="secondary" 
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}

ShoppingCartHeader.propTypes = {}

export default ShoppingCartHeader