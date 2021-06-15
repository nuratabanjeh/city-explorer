import React from 'react';


export class Weather extends React.Component {



    render() {
        console.log("🚀 ~ file: Weather.js ~ line 43 ~ Weather ~ render ~ this.props.weatherInfo", this.props.weatherInfo)
        return (
            <>
                <div>
                    <p>

                        {this.props.weatherInfo[0].datetime}
                    </p>
                    <p>
                        {this.props.weatherInfo[0].weather.description}


                    </p>
                    <p>

                        {this.props.weatherInfo[1].datetime}

                    </p>
                    <p>

                        {this.props.weatherInfo[1].weather.description}
                    </p>
                    <p>

                        {this.props.weatherInfo[2].datetime}
                    </p>
                    <p>

                        {this.props.weatherInfo[2].weather.description}
                    </p>
                </div>

            </>
        )
    }

}



export default Weather;