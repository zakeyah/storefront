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