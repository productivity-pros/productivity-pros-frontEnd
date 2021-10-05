import React from 'react'
import { Container, Row, Col, Image, Modal } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import NewsModal from './NewsModal';
import './News.scss';
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
        for (let i = 0; i < 9; i++) {
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
                <Container>
                    <Row>
                        {this.state.Data.map((ele, i) => {
                            return (
                                <Col style={{}} onClick={()=>{this.showM(ele)}} xs={6} md={4} className='imgContainer' kye={i}>
                                    <Image className='img' src={ele.image} rounded />
                                    <p className='text'>{ele.title}</p>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
                <hr />
                <Modal show={this.state.show} onHide={this.closeM}>
                <NewsModal ele={this.state.ele}/>
                </Modal>
            </div >
        )
    }
}

export default withAuth0(News)
