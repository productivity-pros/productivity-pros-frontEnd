import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MyList from './MyList';
import MyNotes from './MyNotes'
import Sidebar from './sidebar'
import Explore from './Explore'
import Login from './Login.js';
import {withAuth0} from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    const {isAuthenticated} = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Sidebar/>
          <Switch>
            {/* <Route exact path="/">
              {isAuthenticated ? <Explore/> : <Login />}
            </Route> */}
            <Route exact path="/MyList"><MyList /></Route>
            <Route exact path="/MyNotes"><MyNotes /></Route>
          </Switch>
          {/* <Footer /> */}
        </Router>
      </>
    );
  }
}
export default withAuth0(App);