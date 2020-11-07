import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from 'react-router-dom' 
import { Provider } from 'react-redux';
import store from './app/store'
import App from './App';
import login from './views/LoginPage';
import main from './views/MainPage';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />  
      <Route path="/login" component={login} />  
      <Route path="/main" component={main} />  
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
