  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useSelector} from 'react-redux';

// import { connect } from 'react-redux';
// import { PinDropSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: '20px' , height:'80px',paddingTop:'5px'

    },
}));

const Header = (props) => {
    const state = useSelector((state)=> {
        return {cart:state.cart} });
  const style = useStyles();
    return (
        <AppBar color='inherit' position="static" className={style.title} >
            <Toolbar>
                <Typography variant="h5" >
                    <p>OUR STORE</p>
                    <p>cart :{state.cart.length}</p>
             </Typography>
            </Toolbar>
        </AppBar>
    )
  }


  export default Header;