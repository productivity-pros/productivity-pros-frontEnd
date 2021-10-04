import React from 'react'
import { CardGroup, Card, Modal } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import NewsModal from './NewsModal';
const axios = require('axios');

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            show: false,
            ele:0
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
    closeM = () => {
        this.setState({
            show: false
        })
    }
    showM = (ele) => {
        this.setState({
            show: true,
            ele: ele
        })
    }
    render() {
        this.getData()
        return (
            <div>
                <h2>Latest News</h2>
                <CardGroup style={{ display: 'flex' }}>
                    {this.state.Data.map((ele, idx) => {
                        return (
                            <Card style={{ width: '18rem', margin: '5px', borderRadius: '25px', border: 'solid ', cursor: 'pointer'}} key={idx} onClick={()=>{this.showM(ele)}}>
                                <Card.Body>
                                <Card.Img variant="top" src={ele.image}/>
                                    <Card.Text>
                                        {ele.title}
                                    </Card.Text>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        By {ele.author}
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        )
                    })
                    }
                </CardGroup>
                <Modal show={this.state.show} onHide={this.closeM}>
                <NewsModal ele={this.state.ele}/>
                </Modal>
            </div >
        )
    }
}

export default withAuth0(News)
