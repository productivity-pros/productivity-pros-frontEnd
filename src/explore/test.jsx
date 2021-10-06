import React from 'react'
import { Carousel } from 'react-bootstrap'
import './News.scss';
import './test.scss'
import Weather from './Weather'

const axios = require('axios');


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inspiringData: [],
            funData: [],
            adviceData: [],
            movieData: [],
        }
    }
    getData = async () => {
        // Inspiring Expressions
        let temData = await axios.get('http://localhost:3001/getInspiringExpressions');
        let inspiringData = temData.data
        // Fun Fact
        temData = await axios.get('http://localhost:3001/getFunFacts');
        let funData = temData.data
        // Advice
        temData = await axios.get('http://localhost:3001/getAdvice');
        let adviceData = temData.data
        // Movie
        temData = await axios.get('http://localhost:3001/getMovie');
        let movieData = temData.data
        
        if (this.state.inspiringData.length === 0) {
            this.setState({
                inspiringData: inspiringData,
                funData: funData,
                adviceData: adviceData,
                movieData: movieData,
            })
        }
    }

    render() {
        this.getData()
        return (
            <div className='bigContainer'>
                <h2>Your Daily Stream</h2>
                <div>
                    <div className="wrapper">
                        <div className="grid">

                            <div className="testimonial-card bg-img bg-purple grid-item-1">
                                <div className="card-head">
                                    <div className="person">
                                        <div className="name">
                                            <p>Inspiring Expressions</p>
                                        </div>
                                        <div className="role">
                                            <p>By {this.state.inspiringData.authorName}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="quote-highlight">
                                        <p>{this.state.inspiringData.text}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial-card bg-gray grid-item-2">
                                <div className="card-head">
                                    <div className="person">
                                        <div className="name">
                                            <p>Fun Fact</p>
                                        </div>
                                        <div className="role">
                                            <p>About {this.state.funData.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="quote-highlight">
                                        <p>{this.state.funData.fact}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial-card bg-light grid-item-3">
                                <div className="card-head">
                                    <div className="person">
                                        <div className="name">
                                            <p>Advice</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="quote-highlight">
                                        <p>{this.state.adviceData.advice}</p>
                                    </div>
                                </div>
                            </div>
                            <Weather />

                            <div className="testimonial-card bg-light grid-item-4">
                                <div className="card-head">
                                    <div className="person">
                                        <div className="name">
                                            <p>Movies to watch</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <Carousel className='slideImg'>
                                        {this.state.movieData.map((ele, i) => {
                                            return (
                                                <Carousel.Item interval={2000} key={i}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={ele.image_url}
                                                        alt="movieImage"
                                                    />
                                                </Carousel.Item>
                                            )
                                        })
                                        }
                                    </Carousel>
                                </div>
                            </div>

                            <div className="testimonial-card bg-light grid-item-6">
                                <div className="card-head">
                                    <div className="person">
                                        <div className="name">
                                            <p>Dad Joke to Start Your Day</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="quote-highlight">
                                        {/* <p>{this.state}</p> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
            </div >
        )
    }
}

export default Test
