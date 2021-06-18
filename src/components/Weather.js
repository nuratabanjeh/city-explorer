import react from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class Weather extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            allWeatherResult: [],
            displayWeather: false,
            errorMessage: false
        }
    }



    // lab08

    getWeather = async () => {
        console.log('inside function');
        let weatherUrl = `http://localhost:3001/weather?lon=${this.props.city.lon}&lat=${this.props.city.lat}`
        const resultArray = await axios.get(weatherUrl)
        
        this.setState({
            displayWeather: true,
            allWeatherResult: resultArray.data
        })
        console.log('******************************************',this.state.allWeatherResult);
    }


    render() {
        return (
            <>
                {this.props.displayMap &&
                    <Button onClick={this.getWeather} variant="outline-primary">Weather</Button>
                }
                {this.state.displayWeather &&
                    <Table>
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>{this.props.city.display_name}</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.allWeatherResult.map((e)=>{
                            console.log("🚀 ~ file: Weather.js ~ line 52 ~ Weather ~ {this.state.allWeatherResult.forEach ~ e", e)
                            return (
                            <tr>
                                   <td>Description</td>
                                <td>{e.description}</td>
                            </tr>
                                )
                                
                            })}
                        </tbody>
                    </Table>

                }

                {this.state.errorMessage &&
                    <p>Weather not Found</p>
                }
            </>
        )
    }
}
export default Weather;


// import React from 'react';


// export class Weather extends React.Component {



//     render() {
//         console.log("🚀 ~ file: Weather.js ~ line 43 ~ Weather ~ render ~ this.props.weatherInfo", this.props.weatherInfo)
//         return (
//             <>
//                 <div>
//                     <p>

//                         {this.props.weatherInfo[0].datetime}
//                     </p>
//                     <p>
//                         {this.props.weatherInfo[0].weather.description}


//                     </p>
//                     <p>

//                         {this.props.weatherInfo[1].datetime}

//                     </p>
//                     <p>

//                         {this.props.weatherInfo[1].weather.description}
//                     </p>
//                     <p>

//                         {this.props.weatherInfo[2].datetime}
//                     </p>
//                     <p>

//                         {this.props.weatherInfo[2].weather.description}
//                     </p>
//                 </div>

//             </>
//         )
//     }

// }



// export default Weather;