const initialState = {
    products: [
      { name: 'Fettucine Alfredo', category: 'Food', price: 10, count: 15, image :'https://www.modernhoney.com/wp-content/uploads/2019/04/Chicken-Fettucine-Alfredo-6.jpg'},

      { name: 'Mozzarella sticks', category: 'Food', price: 6, count: 50 , image: 'https://www.eitanbernath.com/wp-content/uploads/2020/02/Mozzarella-Sticks-4x5-LOW-RES.jpg'},

      { name: 'calzone pizza', category: 'Food', price: 5, count: 30, image : 'https://elavegan.com/wp-content/uploads/2019/05/easy-calzone-pocket-with-mushrooms-peppers-and-vegan-cheese.jpg'},

      { name: 'Summer Outfits ', category: 'Girls Clothes', price: 20, count: 20, image:'https://ae01.alicdn.com/kf/Hf04c37d497954ecab018a9615da94027W/Clothes-For-Girls-Summer-Toddler-Girls-Clothes-2Pcs-Outfits-Kids-Clothing-For-Girls-Tracksuit-Suit-For.jpg_Q90.jpg_.webp'},

      { name: 'unicorn dress', category: 'Girls Clothes', price: 15, count:100, image : 'https://ae01.alicdn.com/kf/HTB1OowAasnrK1RjSspkq6yuvXXa2/Unicorn-Dress-Girls-Elegant-Princess-Dress-Kids-Dresses-For-Girls-Party-Dress-Carnival-Cosplay-Party-Children.jpg_Q90.jpg_.webp'},

      { name: 'princess dress', category: 'Girls Clothes', price: 25, count: 50, image : 'https://images-na.ssl-images-amazon.com/images/I/61ahS3aXm4L._AC_UL1500_.jpg'},


    ]
  }


  // eslint-disable-next-line import/no-anonymous-default-export
  const productsReducer = (state = initialState, action) => {
     let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let product = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { ...state, product: product };
    default:
      return state;
  }
};

  export default productsReducer