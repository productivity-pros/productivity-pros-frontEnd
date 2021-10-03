import React from 'react'
import { CardGroup, Card } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
const axios = require('axios');

class Spiring extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: []
        }
    }
    getData = async () => {
        let url = `http://localhost:3001/getInspiringExpressions`
        let Data = []
        for (let i = 0; i < 4; i++) {
            let temData = await axios.get(url);
            Data.push(temData.data);
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
                <h2>Spiring Expressions</h2>
                <CardGroup style={{ display: 'flex' }}>
                    {this.state.Data.map((ele, idx) => {
                        return (
                            <Card style={{ width: '18rem', margin: '5px', borderRadius: '25px', border: 'solid ' }} key={idx}>
                                <Card.Body>
                                    <Card.Text style={{ minHeight: '200px' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        "
                                        {ele.text}
                                        "
                                    </Card.Text>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        By {ele.authorName}
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        )
                    })
                    }
                </CardGroup>
            </div >
        )
    }
}

export default withAuth0(Spiring)
