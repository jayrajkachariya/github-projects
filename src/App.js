import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore, { history } from './redux/store';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import ProjectsGrid from './components/ProjectsList/ProjectsGrid';
import Header from './components/Header/Header';
import ProjectView from './components/ProjectView/ProjectView';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header />
          <Switch>
            <Route path="/project" component={ProjectView} />
            <Route path="/" component={ProjectsGrid} />
            <Route component={_404} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const _404 = () => (
  <div className="d-flex align-item-center justify-content-center h-100 w-100">
    <div>
      <h1>404</h1>
      <h3>Not Found! :(</h3>
    </div>
  </div>
);

export default App;
