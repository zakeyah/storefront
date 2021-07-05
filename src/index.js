import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from '../src/store/'
import {BrowserRouter} from 'react-router-dom';


function Main() {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <App/>
      </Provider>
      </BrowserRouter>
  )
}

ReactDOM.render(<Main/>, document.getElementById("root"));

