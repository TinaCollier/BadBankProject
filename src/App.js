import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useContext } from 'react';
import NavBar from './pages/NavBar';
import {
  HashRouter,
  Routes,
  Route } from 'react-router-dom';
import Deposit from './pages/Deposits';
import Withdraw from './pages/Withdrawals';
import CreateAccount from './pages/CreateAccount';
import AllData from './pages/AllData';
import HomePage from './pages/HomePage';
import NewAccount from './pages/NewAccount';
import Success from './pages/Success'
import UserContext from './components/UserContext';


function App() {
  
  const context = useContext(UserContext);
  

  return (
    
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact         element={ <HomePage /> }      />
          <Route path="/createaccount"  element={ <CreateAccount /> } />
          <Route path="/deposit"        element={ <Deposit /> }       />
          <Route path="/withdraw"       element={ <Withdraw /> }      />
          <Route path="/alldata"        element={ <AllData /> }       />
          <Route path="/newaccount"     element={ <NewAccount /> }    />
          <Route path="/success"        element={ <Success /> }       />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
