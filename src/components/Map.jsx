import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../components/Marker";

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};
const aws = require("aws-sdk");

const secretKey = process.env.REACT_APP_GOOGLE_API;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 40.73,
      lng: -73.93,
    },
    zoom: 7,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "90vh",
          width: "98%",
          marginTop: "40%",
          marginBottom: "5%",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: secretKey,
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          options={{
            styles: require(`../mapStyles.json`),
          }}
        >
          <Marker
            lat={42.1896997}
            lng={-77.1600196}
            name={"My Marker"}
            color="#00cae9"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
