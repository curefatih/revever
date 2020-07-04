import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import CodeEditor from './components/CodeEditor/CodeEditor';
import SourceOpenSteps from './components/SourceOpenSteps/SourceOpenSteps';
import CommitCard from './components/CommitCard/CommitCard';
import { Provider } from 'react-redux';
import store from './redux/store';
import CommitList from './components/CommitList/CommitList';

function App() {
  return (
    <Provider store={store}>
      <div className="app wrap xl-flexbox xl-top">
        <Sidebar className="sidebar_wrapper col" />
        <div className="col content">
          <CommitList />
          {/* <div className="wrap xl-flexbox xl-middle xl-center">
            <div className="col xl-7-12 commit-card_wrapper" style={{ padding: "10px" }}>
              <CommitCard tree="123" message="initial commit" />
            </div>
            <div className="col xl-2-12 point"></div>

          </div>
          <div className="wrap xl-flexbox xl-middle xl-center">
            <div className="col xl-7-12 commit-card_wrapper" style={{ padding: "10px" }}>
              <CommitCard tree="123" message="awesome commit" />
            </div>
            <div className="col xl-2-12 point"></div>

          </div> */}


        </div>
      </div>
    </Provider>
  );
}

export default App;
