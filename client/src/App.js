import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './components/pages/Home';
import Marie from './components/pages/Marie';
import Login from './components/auth/Login';
import Layout from './components/layout/Layout';

function onAuthRequired({ history }) {
  history.push('/login')
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-857266.oktapreview.com/oauth2/default'
          client_id='0oak7c5p7tLfKS7m30h7'
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired} >
          <div className="App">
            <Layout>
              <Route path="/" exact={true} component={Home} />
              <Route path="/marie" exact={true} component={Marie} />

              {/* <SecureRoute path="/marie" exact={true} component={Marie} /> */}
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-857266.oktapreview.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </Layout>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
