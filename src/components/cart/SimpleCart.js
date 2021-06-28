import React from 'react';
// import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {remove} from '../../store/actions'
import {useSelector, useDispatch} from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton';



function Products(props) {
  const state = useSelector((state)=> {
    return {cart: state.cart} });
const dispatch = useDispatch();
  return (
    <>
    {/* <p style={{marginLeft:'47%',fontSize:'25px'}}>My Cart</p> */}
    <Grid item sm={5} style ={{display: 'grid',
      gridColumnGap: '50px',
      gridTemplateColumns: 'auto auto auto'}}>
          <ul>

    {state.cart.map((product,index) => {
    
        return (
            <li>
            <Card
            style={{ boxShadow:` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 50px 80px rgba(0, 0, 0, 0.12)`, borderRadius:'10px', width: "15rem"  ,marginTop : '10px', marginLeft:'100%', border:'1px solid gray'}}
            className={`cards ${product.name}`}
            key={index}
          > 
            <IconButton aria-label="delete" onClick={() =>dispatch(remove(product))}>
        <DeleteIcon />
      </IconButton>
            <CardContent><h2>{product.quantity}   {product.name}  </h2></CardContent>
          </Card>
          </li>
          )
       
      })}
      </ul>
    </Grid>
  </>
  )
}



export default Products;