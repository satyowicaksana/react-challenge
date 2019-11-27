import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
          <img onClick={toHome} className="logo clickable" alt="shield-logo" src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/S.H.I.E.L.D._logo_NEW.png/revision/latest/scale-to-width-down/310?cb=20190422151215"/>
          <Typography onClick={toHome}><b className="text-logo clickable">S.H.I.E.L.D.</b></Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}