import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app wrap xl-flexbox xl-top">
      <Sidebar className="col"/>
      <div className="col content">app</div>
    </div>
  );
}

export default App;
