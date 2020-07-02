import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import CodeEditor from './components/CodeEditor/CodeEditor';
import SourceOpenSteps from './components/SourceOpenSteps/SourceOpenSteps';

function App() {
  return (
    <div className="app wrap xl-flexbox xl-top">
      <Sidebar className="col" />
      <div className="col content">
        <div className="wrap xl-flexbox xl-middle xl-center">
          <SourceOpenSteps className="col xl-1-2" />
        </div>
      </div>
    </div>
  );
}

export default App;
