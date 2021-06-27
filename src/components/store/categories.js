let initialState = {
    categories: [
        {normalizedName: 'Food', displayName: 'Food',description:'italian food'},
        {normalizedName: 'Girls Clothes', displayName: 'Girls Clothes',description:'clothes for little girls'}
    ],
    active: ''
}

const categories= (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case 'ACTIVE':
            const categories = state.categories;
            const active = payload;
            console.log('in ACTIVE  case: ', categories,active);
            return { categories, active };


        default: 
            return state;
    }
};

export const active = (name) => {
    console.log('in active function  case: ', name);
    return {
      type: 'ACTIVE',
      payload: name,
    };
  };


export default  categories ;


