import superagent from 'superagent';

const api = 'https://api-server402.herokuapp.com/store';

export const getRemoteData = () => (dispatch, state) => {
    // 1- get the remote data with superagent
    // 2- then dispatch an action with the response after we get it.
   return superagent.get(api).then(res=> {
        dispatch(getAction(res.body));
    });
}
export const getAction = payload => {
  return {
      type: 'GET',
      payload: payload
  }
}

export const increment = () => (dispatch, state) => {
  // 1- get the remote data with superagent
  // 2- then dispatch an action with the response after we get it.
 return superagent['put'](api).then(res=> {
      dispatch(getAction(res.body));
  });
}

export const active = (name) => {
    // console.log('in active function  case: ', name);
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