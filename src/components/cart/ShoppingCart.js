import React from 'react';
// import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import {remove} from '../../store/actions'
import {useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





function ShoppingCart(props) {
  let total=0
  const state = useSelector((state)=> {
    return {cart: state.cart} });
    // const dispatch = useDispatch();
    return (
      <>
      <Card
            style={{ boxShadow:` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 50px 80px rgba(0, 0, 0, 0.12)`, borderRadius:'10px', width: "60rem"  ,marginTop : '10px', marginBottom:'30%',marginLeft:'10%', border:'1px solid gray'}}
          > 
    <p style={{marginLeft:'47%',fontSize:'25px'}}>Order Summary</p>
    <Grid item sm={5} style ={{display: 'grid',
      gridColumnGap: '50px',
      gridTemplateColumns: 'auto auto auto'}}>
          <ul>

    {state.cart.map((product,index) => {
        total=total+product.price*product.quantity
    
        return (
            <li  key={index}>
            
            
           <h2 style={{fontSize:'15px',width:'250px'}}>{product.quantity}   {product.name} .... price:{product.price}JD </h2>
         
          </li>
          )
       
      })}
      </ul>
      
      
      
    </Grid>
      <p style={{fontSize:'25px'}}>Total = {total}</p>
    <form  noValidate autoComplete="off">
        <div>
        <TextField label="first name" id="standard-size-small" size="small" />
        <TextField label="last name" id="standard-size-small" size="small" />
        <TextField label="adress" id="standard-size-small" size="small" />
        <TextField label="city" id="standard-size-small" size="small" />
        <TextField label="state" id="standard-size-small" size="small" />
        <TextField label="zip code" id="standard-size-small" size="small" />
      </div>
      <div>
        <TextField label="Credit card#" id="standard-size-small" size="small" />
        <TextField label="CVV" id="standard-size-small" size="small" />
        <TextField label="  "  id="standard-size-small" size="small" type="date"/>
      </div>
        </form>
        
        <Button variant="outlined" color="secondary" style = {{boxShadow:` 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 50px 80px rgba(0, 0, 0, 0.12)`,borderRadius:'10px',marginBottom : '5px',
            border:'1px solid gray',width:'260px'}}
         onClick={()=>alert('Thank you for your purchase')}>Place Your Order</Button>
         </Card>
  </>
  )
}



export default ShoppingCart;