import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
    render() {

        return (
            <Navbar style={{backgroundColor:'#09090C'}}>
                <Navbar.Brand style={{margin:'3rem', color:'white'}}>logo</Navbar.Brand>
            </Navbar>
        );
    }
}
export default Header;
