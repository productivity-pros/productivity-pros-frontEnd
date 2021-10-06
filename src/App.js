import React from 'react';
import Footer from './components/Footer';
 import MyList from './components/MyList';
 import MyNotes from './components/MyNotes'
// import Sidebar from './sidebar'
import Explore from './components/Explore'
import Login from './components/Login.js';
import {withAuth0} from "@auth0/auth0-react";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage'
import AboutUS from './components/AboutUS';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import LoginButton from './components/LoginButton';
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
        this.setState({
            spiringData: spiringData
        })
    }
  render() {
    const {isAuthenticated} = this.props.auth0;
    return (
      <>
        <Router>
        { isAuthenticated && <Navbar />}
          <Switch>
             <Route exact path="/">
              {isAuthenticated ? <Explore/> : <LandingPage />}
              {/* {isAuthenticated ? <Explore/> : <LoginButton />} */}

            </Route>
            {/* <Route exact path="/MyList">{isAuthenticated ? <Navbar/> : <LandingPage />}</Route> */}
            <Route exact path="/MyList">{isAuthenticated ? <MyList /> : <LandingPage />}</Route>
            <Route exact path="/MyNotes">{isAuthenticated ? <MyNotes/> : <LandingPage />}</Route>
            <Route exact path="/AboutUs">{ <AboutUS/> }</Route>

          </Switch>
          {/* {isAuthenticated && <FeedbackModel />} */}
          {isAuthenticated && <Footer />}  
        </Router>
      </>
    );
  }
}
export default withAuth0(App);