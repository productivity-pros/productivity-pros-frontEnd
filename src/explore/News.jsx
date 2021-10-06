import React from 'react'
import { Container, Row, Col, Card, Modal } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import NewsModal from './NewsModal';
import '../scss/News.scss';
const axios = require('axios');

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            show: false,
            ele: 0
        }
    }
    getData = async () => {
        let url = `http://localhost:3001/getLatestNews`
        let temData = await axios.get(url);
        let Data = []
        for (let i = 0; i < 10; i++) {
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
            <div className="news-con">
                <h2>Latest News</h2>
                <div style={{ width: "100%" }}>
                    <Row >
                        {this.state.Data.map((item, i) => {
                            return (
                                <div className="news-card">
                                    {/* <Col xs={10} md={6}>
                                        <Card style={{ backgroundColor: '#343A40', color: 'hsl(176, 68%, 64%)', fontWeight: '900', width: "100%" }} onClick={() => { this.showM(ele) }} kye={i}>
                                            <Card.Img src={ele.image} rounded />
                                            <Card.Title> {ele.title}</Card.Title>
                                            <Card.Text >

                                            </Card.Text>

                                        </Card>
                                    </Col> */}
                                    <Card className="bg-dark text-white" onClick={() => window.open(`${item.url}`,'_blank')}>
                                        <Card.Img src={item.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.png"}} />
                                        <Card.ImgOverlay>
                                            <Card.Title>{item.title}</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>

                                </div>
                            )
                        })}
                    </Row>
                </div>
                <Modal show={this.state.show} onHide={this.closeM}>
                    {/* <NewsModal ele={this.state.ele}/> */}
                </Modal>








                {/* <h2>Latest News</h2>
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
                </Modal> */}
            </div >
        )
    }
}

export default withAuth0(News);
