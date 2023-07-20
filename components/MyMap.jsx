import { getCenter } from "geolib";
import * as React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MyMap = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = React.useState({});
  
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = React.useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <Map
      {...viewState}
      // style={{     width: "100%", height: "100%" }}
      mapboxAccessToken={process.env.ACCESS_TOKEN}
      mapStyle="mapbox://styles/johnwick108/clka3832k00oe01qj30388y6o"
      onMove={(evt) => setViewState(evt.viewState)}
      attributionControl={false}
      container="map"
      style="mapbox://styles/mapbox/streets-v10"
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              aria-label="push-pin"
              onClick={() => selectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
};

export default MyMap;


