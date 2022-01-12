import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { useState, useRef, useCallback } from 'react'
import MapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYm9yb21lb3QiLCJhIjoiY2t4czN5ZXBuMDQ2ZDJvcGRrdW94YTR2dCJ9.9rCr2ZJ7YUKkm7U3HHEctw';

const AddressSection = ({ setFormData }) => {
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

            if (result.place_type[0] === 'address') {

              const address = result.place_name;

              const city = result.context.find(obj => {
                return obj.id.includes('place');
              })?.text;

              const state = result.context.find(obj => {
                return obj.id.includes('region');
              })?.text;

              setFormData(prevState => {
                return {
                  ...prevState, address, city, state
                }
              });

            } else {
              alert('This is not a valid address');
            }

          }}
        />
      </MapGL>
    </div>
  );
};

export default AddressSection;
