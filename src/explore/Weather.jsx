import React from 'react'
import '../scss/Weather.scss'
const axios = require('axios');

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: []
    }
  }
  getData = async () => {
    let temData = await axios.get('http://localhost:3001/getWeather?city=amman');
    let Data = temData.data
    if (this.state.Data.length === 0) {
      this.setState({
        Data: Data
      })
    }
  }

  render() {
    this.getData()
    // if (this.state.Data.length !== 0)
      return (

        <div className="card-w">
          {this.state.Data.length !== 0 &&
            <>
              <div className="card-w-image">
                <div className="card-w-image-weather-overlay">
                  <span className="temp-w">{this.state.Data[0].temp}°C</span>
                  <span className="city-w">Amman</span>
                  <span className="overcast-w">{this.state.Data[0].description}</span>
                </div>
              </div>
              <div className="card-w-forecast-w">
                <div className="forecast-w-item">
                  <span className="day-w">Tomorrow</span>
                  <div className="prediction-w">
                    <span className="temp-w">{this.state.Data[1].temp}°C</span>
                    <span className="overcast-w">{this.state.Data[1].description}</span>
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      );
  }
}
export default Weather