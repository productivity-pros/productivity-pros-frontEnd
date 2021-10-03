import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mylist from './MyList'
class Explore extends React.Component {
    render() {
        return (
            <div>
                <h1>Explore</h1>
              <Mylist></Mylist>  
            </div>
        )
    }
}
export default Explore;
