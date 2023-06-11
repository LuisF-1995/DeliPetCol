import React from 'react'
import PropTypes from 'prop-types'
import "./userNav.styles.scss"

import {TbUserCircle } from 'react-icons/tb'

//MATERIAL UI
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const UserNavigation = props => {
  return (
    <div className='userNavContainer' style={{width:`${props.width}`}}>
      <Stack direction="row" spacing={2}>
        <TbUserCircle id="defaultUserView"/>
      </Stack>
    </div>
  )
}

UserNavigation.propTypes = {}

export default UserNavigation