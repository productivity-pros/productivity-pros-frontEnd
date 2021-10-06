import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Dropdown from 'react-bootstrap/Dropdown'
import '../css/Navbar.css'

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
    user,
  } = useAuth0();
  return isAuthenticated && (

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <img
          src={user.picture}
          alt="Profile"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/" onClick={logout}>Logout</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LogoutButton;