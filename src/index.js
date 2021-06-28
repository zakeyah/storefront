import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from '../src/store/'


function Main() {
  return (
      <Provider store={store}>
          <App/>
      </Provider>
  )
}

ReactDOM.render(<Main/>, document.getElementById("root"));

