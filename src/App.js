import react from 'react';
import axios from 'axios';
import Weather from './components/Weather'
import Movies from './components/movies'

class App extends react.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      result: '',
      displayMap: false,
      errorMessage: false
    }
  }

  updateValue = (event) => {
    this.setState({
      city: event.target.value
    })
    console.log(this.state.city);
  }

  getLocation = async (e) => {
    e.preventDefault();


    let url = `https://eu1.locationiq.com/v1/search.php?key=1045814f080fe5&q=${this.state.city}&format=json`;

    try {
      let result = await axios.get(url);
      console.log(result.data[0]);


      this.setState({
        result: result.data[0],
        displayMap: true
      })
    } catch {
      this.setState({
        displayMap: false,
        errorMessage: true
      })
    }
  }


  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.getLocation}>
          <input type='text' placeholder='add a city' onChange={this.updateValue} />
          <button type='submit'>Explore!</button>
        </form>

        {this.state.displayMap &&
          <p>City: {this.state.result.display_name}</p>
        }
        {this.state.displayMap &&
          <p>Latitude: {this.state.result.lat}</p>
        }
        {this.state.displayMap &&
          <p>Longitude: {this.state.result.lon}</p>
        }

        {this.state.displayMap &&
          <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.2755a236f4cbc8df7b0076e7519c870b&center=${this.state.result.lat},${this.state.result.lon}`} alt='' />
        }

        {this.state.errorMessage &&
          <p>City not Found</p>
        }

        {this.state.displayMap &&
          <Weather city={this.state.result} displayMap={this.state.displayMap}></Weather>
        }
        {this.state.displayMap &&
          <Movies city={this.state.city} displayMap={this.state.displayMap}></Movies>
        }
      </>
    )
  }
}
export default App;

// import React from 'react';
// import axios from 'axios';
// import Weather from './components/Weather'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchUrl: '',
//       nameLocation: '',
//       showResult: false,
//       errorMessage: false,
//       weatherResult: false,
//       weatherInfo: {},
//     }
//   }

//   getexplorer = async (ev) => {
//     ev.preventDefault();
//     let urlForSearch = `https://eu1.locationiq.com/v1/search.php?key=pk.3bce857e7f116dcdee31f7b3fb42cc23&q=${this.state.searchUrl}&format=json`;

//     let serverWeather = process.env.MY_HEROUKO;
//     console.log("🚀 ~ file: App.js ~ line 23 ~ App ~ getexplorer= ~ process.env", process.env)

//     let weatherUrl = `http://localhost:3001/weather?searchQuery=${this.state.searchUrl}`
//     console.log("🚀 ~ file: App.js ~ line 25 ~ App ~ getexplorer= ~ weatherUrl", weatherUrl)
//     try {

//       let result = await axios.get(urlForSearch);
//       let weatherData = await axios.get(weatherUrl)
//       console.log(result.data[0]);

//       this.setState({
//         nameLocation: result.data[0],
//         showResult: true,
//         weatherResult: true,
//         weatherInfo: weatherData.data,


//       })
//       console.log(this.state.nameLocation);
//       console.log(this.state.weatherInfo);
//     }
//     catch {
//       this.setState({
//         showResult: false,
//         errorMessage: true,
//         weatherResult: false,

//       })
//     }
//   }
//   changeSearchUrl = (event) => {
//     this.setState({
//       searchUrl: event.target.value,

//     })

//     console.log(this.state.searchUrl);
//   }

//   render() {
//     return (
//       <>
//         <h1> City Explorer</h1>

//         <form onSubmit={this.getexplorer}>
//           <input type='text' placeholder='type a city' onChange={this.changeSearchUrl} />
//           <input type='submit' value='Explore' />
//         </form>
//         <div>
//           {this.state.showResult
//             && <p>
//               Name: {this.state.nameLocation.display_name}
//             </p>}
//           {this.state.showResult
//             && <p>
//               latitude:{this.state.nameLocation.lat}
//             </p>}
//           {this.state.showResult
//             && <p>
//               longitude: {this.state.nameLocation.lon}
//             </p>}
//           {this.state.showResult
//             &&
//             <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.3bce857e7f116dcdee31f7b3fb42cc23&center=${this.state.nameLocation.lat},${this.state.nameLocation.lon}&zoom=1-18`} />
//           }
//           {this.state.errorMessage &&
//             <p>  "error": "Unable to geocode" </p>
//           }
//         </div>
//         {
//           this.state.weatherResult &&
//           <Weather city_name={this.state.searchUrl}
//             weatherInfo={this.state.weatherInfo} />

//         }
//       </>
//     )
//   }
// }
// export default App;



