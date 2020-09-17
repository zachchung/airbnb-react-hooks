import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import './styles/App.css';
import Flat from './components/flat';
import Marker from './components/marker';


const App = () => {
  const [flats, setFlats] = useState([]); // filtered flats
  const [allFlats, setAllFlats] = useState([]); // all flats
  const [selectedFlat, setSelectedFlat] = useState(null); // selected flat
  const [search, setSearch] = useState(""); // search term

  // call API (componentDidMount is called at React - no need to call)
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        setFlats(data);
        setAllFlats(data);
        // need allFlats for handleSearch which lost all flats
      })
      // debugger
  }, []); // componenetDidMount: need to pass an empty array as 2nd argument

  const selectFlat = (flat) => {
    // console.log(flat);
    setSelectedFlat(flat);
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setFlats(allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name)));
    // debugger
  }

  let center = {
    lat: 48.8566, lng: 2.3522
  };

  // if ({selectedFlat}) {
  if (selectedFlat) {
    center = { lat: selectedFlat.lat, lng: selectedFlat.lng }
  }

  // In rails, controller: @flats => html: @flats.each...
  return (
    <div className="app">
      <div className="main">
        <div className="search">
          <input type="text" placeholder="Search..." value={search} onChange={handleSearch} />
        </div>
        <div className="flats">
          {flats.map((flat) => {
            return <Flat key={flat.name} flat={flat} selectFlat={selectFlat} />
          })}
        </div>
      </div>
      <div className="map">
        <GoogleMapReact
          center={center}
          zoom={14}>
          {flats.map((flat) => {
            return <Marker key={flat.name} lat={flat.lat} lng={flat.lng} text={flat.price} selected={flat === selectedFlat}/>
            // if flat selected, change color to yellow
          })}
        </GoogleMapReact>
      </div>
    </div>
  ); // key={flat.name} to remove chrome console error (needed whenever loop)
}

export default App;



// // ============================= NO HOOKS =============================
// import React, { Component } from 'react';

// class App extends Component {
//   // React state (like initialize) ???
//   constructor(props) {
//     super(props);
//     this.state = {
//       flats: [],
//       allFlats: [],
//       selectedFlat: null,
//       search: ""
//     }; // need allFlats for handleSearch which lost all flats
//   }

//   // call API (componentDidMount is called at React - no need to call)
//   componentDidMount() {
//   fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
//     .then(response => response.json())
//     .then((data) => {
//       // console.log(data);
//       this.setState({
//         flats: data,
//         allFlats: data,
//         // selectedFlat: data[0]
//       }) // need allFlats for handleSearch which lost all flats
//     })
//   }

//   selectFlat = (flat) => {
//     // console.log(flat);
//     this.setState({
//       selectedFlat: flat
//     });
//   }

//   handleSearch = (event) => {
//     this.setState({
//       search: event.target.value,
//       flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
//     })
//   }

//   render() {
//     let center = {
//       lat: 48.8566, lng: 2.3522
//     };

//     if (this.state.selectedFlat) {
//       center = { lat: this.state.selectedFlat.lat, lng: this.state.selectedFlat.lng }
//     }

//     // In rails, controller: @flats => html: @flats.each...
//     return (
//       <div className="app">
//         <div className="main">
//           <div className="search">
//             <input type="text" placeholder="Search..." value={this.state.search} onChange={this.handleSearch} />
//           </div>
//           <div className="flats">
//             {this.state.flats.map((flat) => {
//               return <Flat key={flat.name} flat={flat} selectFlat={this.selectFlat} />
//               // return <Flat key={flat.name} flat={flat} selectFlact={this.selectFlat} /> // fucking spelling mistake
//             })}
//           </div>
//         </div>
//         <div className="map">
//           <GoogleMapReact
//             center={center}
//             zoom={14}>
//             {this.state.flats.map((flat) => {
//               return <Marker key={flat.name} lat={flat.lat} lng={flat.lng} text={flat.price} selected={flat === this.state.selectedFlat}/>
//               // if flat selected, change color to yellow
//             })}
//           </GoogleMapReact>
//         </div>
//       </div>
//     ); // key={flat.name} to remove chrome console error (needed whenever loop)
//   }
// }

// export default App;
