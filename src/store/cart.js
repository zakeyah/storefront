let initialState =  []
      
const cartReducer= (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
      case 'GETCART':
            state=payload
            return state;
           case 'ADD':

          if (state.includes(payload)){
            payload.quantity=1
            return [...state,payload];
          }
            
            const newState = state.map((product) => {
              if (product.name === payload.name) {
                product.quantity++
              }
              return product
            })
            return newState;

      

            case 'DELETE':
            const filter =  state.filter((product) =>
            product.name !== payload.name ? product.name : null
          );
            // console.log('in Delete  case: ', filter);
            state=filter
            return state;


        default: 
            return state;
    }
};

export default cartReducer;