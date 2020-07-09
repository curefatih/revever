import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import { Provider } from 'react-redux';
import store from './redux/store';
import CommitList from './components/CommitList/CommitList';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Files from './views/Files/Files';

const history = createBrowserHistory();


function App() {

  return (
    <Provider store={store}>
      <Router
        history={history}
      >

        <div className="app wrap xl-flexbox xl-top">
          <Sidebar className="sidebar_wrapper col" />
          <div className="col content">

            <Switch>
              <Route path={"/files/:sha"} component={Files} />
              <Route path="/commits" component={CommitList} />
              <Route path="/">
                <div className="wrap xl-flexbox xl-center xl-middle full-height">
                  <div className="col">Hey! <br/> Select a repo and begin tracking </div>
                </div>
              </Route>
            </Switch>
          
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
