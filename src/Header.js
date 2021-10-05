import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import LogoutButton from './components/LogoutButton.js';
import LoginButton from './components/LoginButton.js';
import {withAuth0} from "@auth0/auth0-react";
import { Container } from 'react-bootstrap';
import logo from './assets/logo.jpg'
import LandingPage from './components/LandingPage.jsx'

class Header extends React.Component {
  render() {
    const isAuthenticated = this.props.auth0;
    return(
      // <div><LandingPage/></div>
      // <Navbar bg="red" >
         /* <Container>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      {' '}
      Productivity Pro
    </Navbar.Brand>
  </Container> */
        // {isAuthenticated ? <LogoutButton/> : <div><LoginButton/> <LandingPage/></div> }
      // </Navbar>
   
    );
  }
}

export default withAuth0(Header);