import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Navbar.css'

export default function ButtonAppBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Typography variant="h6">
            SHIELD
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}