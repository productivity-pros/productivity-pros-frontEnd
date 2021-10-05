import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import News from './explore/News'
import Test from './explore/test'

class Explore extends React.Component {

    render() {
        return (
            <div style={{marginLeft:'17%'}}>
                <h1>Explore</h1>
                <Test/>
                <News/>
            </div>
        )
    }
}
export default withAuth0(Explore);
