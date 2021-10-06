import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import News from '../explore/News'
import DailyFeed from '../explore/DailyFeed'

class Explore extends React.Component {

    render() {
        return (
            <div style={{ marginLeft: '30%' }}>
                <h1>Explore</h1>
                <DailyFeed/>
                <News />
            </div>
        )
    }
}
export default withAuth0(Explore);
