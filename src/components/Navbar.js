import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import LogoutButton from './LogoutButton.js';
import LoginButton from './LoginButton.js';
import { withAuth0 } from "@auth0/auth0-react";
import { Navbar, Col, Image } from 'react-bootstrap';
import logo from '../assets/logo.jpg';

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

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className="nav-body">
        <IconContext.Provider value={{ color: 'hsl(176, 68%, 64%)', }}>
          <div className='navbarHeader'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={this.showSidebar} />
            </Link>
            <Navbar.Brand className={'text-center'} >
              <div className="logo-image">
                <img
                  alt=""
                  src={logo}
                  width="140px"
                  // height="10%"
                  className="d-inline-block align-top"
                />
              </div>
            </Navbar.Brand>
            <div className="log-icon">
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </div>
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
      </div>
    );
  }
}
export default withAuth0(Navbarr);