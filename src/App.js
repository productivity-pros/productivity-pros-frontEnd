import React from 'react';
import Footer from './Footer';
import MyList from './MyList';
import MyNotes from './MyNotes'
import Explore from './Explore'
import Login from './Login.js';
import {withAuth0} from "@auth0/auth0-react";
import Navbar from './components/Navbar';
import Sidebar from './Sidebar';
import Header from './Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: this.props.auth0.user,
        spiringData: []
    }
}

   getSpiringData = async () => {
        let url = `http://localhost:3001/getInspiringExpressions`
        let temData = await axios.get(url);
        let spiringData = temData.data;
        console.log(spiringData)
        this.setState({
            spiringData: spiringData
        })
    }
  render() {
    const {isAuthenticated} = this.props.auth0;
    return (
      <>
        <Router>
         {/* <Navbar /> */}
         <Header /> 
         <Sidebar/>
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <Explore/> : <Login />}
            </Route>
            <Route exact path="/MyList"><MyList /></Route>
            <Route exact path="/MyNotes"><MyNotes /></Route>
          </Switch>
          <Footer />  
        </Router>
      </>
    );
  }
}
export default withAuth0(App);