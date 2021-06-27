  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,

    },
}));

const Header = () => {
  const style = useStyles();
    return (
        <AppBar color='inherit' position="static" style={{ marginBottom: '20px' , height:'80px',paddingTop:'5px'}} >
            <Toolbar>
                <Typography variant="h5" className={style.title}>
                    OUR STORE
    </Typography>
            </Toolbar>
        </AppBar>
    )
  }

  export default Header;