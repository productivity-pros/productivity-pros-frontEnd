import React from 'react'
import { CardGroup, Card } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
const axios = require('axios');

class FunFacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: []
        }
    }
    getData = async () => {
        let url = `http://localhost:3001/getFunFacts`
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
                <h2>Fun Facts</h2>
                <CardGroup style={{ display: 'flex' }}>
                    {this.state.Data.map((ele, idx) => {
                        return (
                            <Card style={{ width: '18rem', margin: '5px', borderRadius: '25px', border: 'solid ' }} key={idx}>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Fun facts about {ele.category}
                                    </Card.Subtitle>
                                    <Card.Text style={{ minHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        {ele.fact}
                                    </Card.Text>
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

export default withAuth0(FunFacts)
