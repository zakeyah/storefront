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
      console.log('llllllllllllllllllllllllll')
      let product = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { ...state,  product };

      case 'ADD':
      let newProducts = { ...state }
      let index = payload.index;
      let productCount = newProducts.products[index].count;
      newProducts.products[index].count = productCount - 1
      if (productCount === 1) {
        newProducts.products = newProducts.products.filter((product) => {
          return product.count > 0;
        })
        return newProducts
      }
      return newProducts
    default:
      return state;
  }
};

  export default productsReducer