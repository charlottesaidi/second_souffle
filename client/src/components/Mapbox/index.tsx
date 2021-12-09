import React, { FC } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const MapBox: FC = () => {
  const [map, setMap] = React.useState<mapboxgl.Map>();
  const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;
    // if the window object is not found, that means
    // the component is rendered on the server
    // or the dom node is not initialized, then return early
    if (typeof window === 'undefined' || node === null) return;
    // otherwise, create a map instance
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [1.1, 49.5],
      zoom: 9,
    });
    // controle pannel de la map
    mapboxMap.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    // save the map object to React.useState
    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);
  //géolocalisation
  const handleCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (map) {
        map.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 15,
          bearing: 0,
          essential: true,
        });
      }
    });
  };
  const CenterLyon = () => {
    if (map) {
      map.flyTo({
        center: [4.85, 45.75],
        zoom: 13,
        bearing: 0,
        essential: true,
      });
    }
  };
  const CenterParis = () => {
    if (map) {
      map.flyTo({
        center: [2.320041, 48.8588897],
        zoom: 13,
        bearing: 0,
        essential: true,
      });
    }
  };
  const CenterMontpellier = () => {
    if (map) {
      map.flyTo({
        center: [3.8767337, 43.6112422],
        zoom: 13,
        bearing: 0,
        essential: true,
      });
    }
  };
  const CenterMarseille = () => {
    if (map) {
      map.flyTo({
        center: [5.3699525, 43.2961743],
        zoom: 13,
        bearing: 0,
        essential: true,
      });
    }
  };
  const CenterToulouse = () => {
    if (map) {
      map.flyTo({
        center: [1.4442469, 43.6044622],
        zoom: 13,
        bearing: 0,
        essential: true,
      });
    }
  };

  return (
    <div>
      <div ref={mapNode} style={{ width: '100%', height: '95vh' }} />
      <Pannel>
        <button onClick={handleCurrentPosition} className="nav-button map">
          <div>
            <FontAwesomeIcon icon={faMapMarker} size="xs" />
          </div>
        </button>
        <Filters>
          <button onClick={CenterParis} className="nav-button">
            Paris
          </button>
          <button onClick={CenterMarseille} className="nav-button">
            Marseille
          </button>
          <button onClick={CenterLyon} className="nav-button">
            Lyon
          </button>
          <button onClick={CenterMontpellier} className="nav-button">
            Montpellier
          </button>
          <button onClick={CenterToulouse} className="nav-button">
            Toulouse
          </button>
        </Filters>
      </Pannel>
    </div>
  );
};

const Pannel = styled.div`
  position: absolute;
  top: 10%;
  left: 1%;
  width: 300px;

  .nav-button {
    border-radius: 15px;
    background-color: #789089;
    color: #fff;
    padding: 5px 20px;
    cursor: pointer;
    margin-bottom: 5px;
    border: none;
    transition: all 0.3s ease-in-out;
    font-family: "Monserat", sans-serif;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 600;
    margin-right: 5px;

    :hover {
      background-color: #4f5f5a;
    }
  }

  .nav-button.map {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 50%;
    padding: 0;
    width: 30px;
    height: 30px;
    margin-bottom: 10px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: green;
      width: 70%;
      height: 70%;
      border-radius: 50%;
    }
  }
`;

const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default MapBox;
