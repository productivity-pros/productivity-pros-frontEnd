import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import News from '../explore/News'
import DailyFeed from '../explore/DailyFeed'
import '../scss/DailyFeed.scss'

class Explore extends React.Component {

    render() {
        return (
            // <div style={{marginLeft: "30px", marginRight: "30px"}}>
            <div className="body-explore" >
                <div style={{ marginLeft: "16%" }}>
                    <h1 className="h1-explore">Explore</h1>
                    <DailyFeed />
                    <News />
                </div>
            </div >
            
        )
    }
}
export default withAuth0(Explore);
