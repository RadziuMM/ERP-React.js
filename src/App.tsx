import React from 'react';
import './styles/App.scss';
import { Link } from 'react-router-dom'  
import Img from './assets/erp.jpg';
import cloud from './assets/cloud.png';

function App() {

  return (
    <div className="App">
      <img src={Img} alt="" />
      <div>
        <img className="icon" src={cloud} alt=""/>
        <div>
        <h1>ERP -</h1>
          Enterprise resource planning (ERP) is the integrated management of main business processes, often in real time and mediated by software and technology.
          ERP is usually referred to as a category of business management software—typically a suite of integrated applications—that an organization can use to collect, store, manage, and interpret data from many business activities.
          ERP provides an integrated and continuously updated view of core business processes using common databases maintained by a database management system. ERP systems track business resources—cash, raw materials, production capacity—and the status of business commitments: orders, purchase orders, and payroll. The applications that make up the system share data across various departments (manufacturing, purchasing, sales, accounting, etc.) that provide the data.ERP facilitates information flow between all business functions and manages connections to outside stakeholders.
        </div>
        <Link className="App_link" to="/Login">authorization</Link>  
      </div>
    </div>
  );
}

export default App;
