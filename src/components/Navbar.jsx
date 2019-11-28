import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
            <Grid item lg={1} md={1} xs={3}>
            <div className="text-logo clickable" onClick={toHome}>S.H.I.E.L.D.</div>
            </Grid>
            <Grid item lg={10} md={10} xs={6}>
            <img onClick={toHome} className="logo clickable" alt="shield-logo" src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/S.H.I.E.L.D._logo_NEW.png/revision/latest/scale-to-width-down/310?cb=20190422151215"/>
            </Grid>
            <Grid item lg={1} md={1} xs={3}>
            <div>
            </div>
            </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}