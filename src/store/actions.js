import superagent from 'superagent';

const api = 'https://api-server402.herokuapp.com/store';
const api2= 'https://zakeyah-api.herokuapp.com/todo';
export const getRemoteData = () => (dispatch, state) => {
    // 1- get the remote data with superagent
    // 2- then dispatch an action with the response after we get it.
   return superagent.get(api).then(res=> {
        dispatch(getAction(res.body));
    });
}

export const getCartData = () => (dispatch, state) => {
  console.log('hiii from get cart data')
 return superagent.get(api2).then(res=> {
      dispatch(getCartAction(res.body));
  });
}

export const removeData = (payload) => (dispatch, state) => {
  console.log('payload._id',payload._id)
  return superagent['delete'](`${api2}/${payload._id}`).then(res=> {
       dispatch(remove(payload));
   });
 }


export const increment = (payload) => (dispatch, state) => {
  let flag=false
  payload.isStock=payload.isStock-1
  if(payload.isStock===0){
     superagent['delete'](`${api}/${payload._id}`)
 .then(res=> {
      dispatch(add(res.body));
    });
  }
  
  superagent['put'](`${api}/${payload._id}`)
  .send(payload)
  .then(res=> {
    dispatch(add(res.body));
  });
  superagent.get(api2).then(res=> {
    for(let i=0;i<res.body.length;i++){
      if (res.body[i]._id===payload._id){
        res.body[i].quantity=res.body[i].quantity+1
        flag=true
        superagent['put'](`${api2}/${res.body[i]._id}`)
        .send( res.body[i])
      }
    }
    if(flag===false){
      
      payload.quantity=1
      superagent['post'](api2)
      .send(payload).then(aha=>{
        console.log(aha.body,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;')
      })
      getCartData()
    }
});

}
export const getCartAction = payload => {
  return {
      type: 'GETCART',
      payload: payload
  }
}
export const getAction = payload => {
  return {
      type: 'GET',
      payload: payload
  }
}

export const active = (name) => {
    return {
      type: 'ACTIVE',
      payload: name,
    };
  };

  export const add = (name) => {
    return {
      type: 'ADD',
      payload: name,
    };
  };
  export const remove = (name) => {
    return {
      type: 'DELETE',
      payload: name,
    };
  };