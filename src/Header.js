import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import LogoutButton from './components/LogoutButton.js';
import LoginButton from './components/LoginButton.js';
import {withAuth0} from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    const isAuthenticated = this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Logo</Navbar.Brand>
        {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
      </Navbar>
    );
  }
}

export default withAuth0(Header);