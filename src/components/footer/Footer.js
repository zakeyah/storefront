  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    height:'50px',

  },
}));



const Footer = () => {
  const style = useStyles();
    return (
      <footer>
        <AppBar position="fixed" color="inherit" className={style.appBar}>
      <Toolbar>
        &copy;  2021 Javascript 401
      </Toolbar>
    </AppBar>
      </footer>
    )
  }

  export default Footer;