import React from 'react';
// import { connect } from 'react-redux';
import { active } from '../../store/actions'
import { Button} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import {useSelector, useDispatch} from 'react-redux';


function Categories(props) {
  const state =useSelector( state=>{
    return{ categories: state.categories.categories,active: state.categories.active}
  })
  const dispatch = useDispatch();
    return (
      <>
            <p style ={{marginLeft:'50px' , fontSize:'20px'}}>Browse our Categories</p>
            <ul>
        {state.categories.map(category => {
          return(
            <Button key={category.normalizedName} onClick={() =>dispatch(active(category.normalizedName))} style={{marginLeft:'30px'}}>
            <Typography>{category.displayName}</Typography>
          </Button>
              )
       
      })
        }
        </ul>
      </>
    )
  }

    
  export default Categories;