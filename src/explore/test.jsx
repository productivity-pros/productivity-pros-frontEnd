import React from 'react'
import { CardGroup, Card, Modal } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
const axios = require('axios');

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: []
        }
    }
    getData = async () => {
        let url = `http://localhost:3001/getLatestNews`
        let temData = await axios.get(url);
        let Data = []
        for (let i = 0; i < 4; i++) {
            Data.push(temData.data[i]);
        }
        if (this.state.Data.length === 0) {
            this.setState({
                Data: Data
            })
        }
    }
    render() {
        this.getData()
        return (
            <div>
                <h2>Test</h2>
                <div>

                </div>
            </div >
        )
    }
}

export default withAuth0(News)
