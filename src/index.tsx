import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from 'react-router-dom' 
import { Provider } from 'react-redux';
import store from './app/store'
import App from './App';
import Login from './views/LoginPage';
import Main from './views/MainPage';
import Employes from './views/Employers';
import Events from './views/Events';
import Settings from './views/Settings';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />  
      <Route path="/Login" component={Login} />  
      <Route path="/Main" component={Main} />  
      <Route path="/Employes" component={Employes} />  
      <Route path="/Events" component={Events} />  
      <Route path="/Settings" component={Settings} />  
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
