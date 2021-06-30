const initialState = {
    products: []
  }
  
  const productsReducer = (state = initialState, action) => {
     let { type, payload } = action;
  switch (type) {
    case 'GET':
            // console.log("payload ---->" , payload)
            state.products=payload
            return state;
    
    case 'ACTIVE':
      // console.log('llllllllllllllllllllllllll')
      let product = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { ...state,  product };

      case 'ADD':
      // console.log(payload,'....................')
     
      return state
    default:
      return state;
  }
};

  export default productsReducer