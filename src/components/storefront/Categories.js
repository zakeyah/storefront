import React from 'react';
import { connect } from 'react-redux';
import { active } from '../store/categories';
import { Button} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';


function Categories(props) {
    return (
      <>
            <p style ={{marginLeft:'50px' , fontSize:'20px'}}>Browse our Categories</p>
            <ul>
        {props.categories.map(category => {
          return(
            <Button key={category.normalizedName} onClick={() =>props.active(category.normalizedName)} style={{marginLeft:'30px'}}>
            <Typography>{category.displayName}</Typography>
          </Button>
              )
       
      })
        }
        </ul>
      </>
    )
  }
  
  const mapStateToProps = (state) => {
    return {
      categories: state.categories.categories,
      active: state.categories.active
    };
  };
  
  const mapDispatchToProps = { active };
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Categories);