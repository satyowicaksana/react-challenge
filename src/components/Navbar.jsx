import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import './Navbar.css'
import {
  useHistory
} from 'react-router-dom'

export default function ButtonAppBar() {
  const history = useHistory()

  const toHome = () => {
    history.push('/')
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Grid container align="center" justify="center">
            <Grid item lg={1}>
            <Typography onClick={toHome}><b className="text-logo clickable">S.H.I.E.L.D.</b></Typography>
            </Grid>
            <Grid item lg={10}>
            <img onClick={toHome} className="logo clickable" alt="shield-logo" src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/S.H.I.E.L.D._logo_NEW.png/revision/latest/scale-to-width-down/310?cb=20190422151215"/>
            
            </Grid>
            <Grid item lg={1}>
            <Button className="navbar-button">SIGN UP</Button>
            </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}