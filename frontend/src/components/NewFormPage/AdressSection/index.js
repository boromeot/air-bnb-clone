import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { useState, useRef, useCallback } from 'react'
import MapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYm9yb21lb3QiLCJhIjoiY2t4czN5ZXBuMDQ2ZDJvcGRrdW94YTR2dCJ9.9rCr2ZJ7YUKkm7U3HHEctw';

const AdressSection = ({ setFormData }) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    }, [handleViewportChange]
  );

  return (
    <div id="FMP-target" className="w50p t0 l50 absolute" style={{height: 'calc(100% - 80px)'}}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-right"
          onResult={({ result }) => {
            const address = result.place_name;
            console.log(address);
            setFormData(prevState => {
              return {
                ...prevState, address
              }
            })
          }}
        />
      </MapGL>
    </div>
  );
};

export default AdressSection;
