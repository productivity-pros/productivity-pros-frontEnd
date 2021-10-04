import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return(
      <div style={{background:'#343A40'}}>
        <Navbar.Brand>&copy; Best Books</Navbar.Brand>
      </div>
    );
  }
}

export default Footer;
