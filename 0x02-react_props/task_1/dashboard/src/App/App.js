import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <div className='App-body'>
          <Login />
        </div>
        <footer className='App-footer'>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
