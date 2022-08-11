import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import SiteContent from './Components/SiteContent/SiteContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Sidebar/>
      <SiteContent/>
    </div>
  );
}

export default App;
