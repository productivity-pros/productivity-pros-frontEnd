import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import LogoutButton from './LogoutButton.js';
import LoginButton from './LoginButton.js';
import { withAuth0 } from "@auth0/auth0-react";
import {Navbar, Col, Image} from 'react-bootstrap';

class Navbarr extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebar: false
    }
  }
  showSidebar = () => {
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  render () {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={this.showSidebar} />
            </Link>
            <Navbar.Brand>Logo</Navbar.Brand>
            {isAuthenticated ? <LogoutButton/> : <LoginButton />}
          </div>
          <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={this.showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
}
export default withAuth0(Navbarr);