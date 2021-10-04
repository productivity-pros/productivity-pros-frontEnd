import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Spiring from './explore/Spiring'
import FunFacts from './explore/FunFacts'
import Advice from './explore/Advice'
import News from './explore/News'

class Explore extends React.Component {

    render() {
        return (
            <div style={{marginLeft:'17%'}}>
                <h1>Explore</h1>
                <News/>
                <Spiring/>
                <FunFacts/>
                <Advice/>
            </div>
        )
    }
}
export default withAuth0(Explore);
