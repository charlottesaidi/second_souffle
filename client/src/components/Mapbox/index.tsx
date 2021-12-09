import React, { FC, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

import type { Dumpster } from 'src/types/dumpster';
import type { PreparedCity } from 'src/pages/map';

type Props = {
  data: Dumpster[];
  preparedCities: PreparedCity[];
  currentPosition: PreparedCity | undefined;
};

const Mapbox: FC<Props> = ({ data, preparedCities, currentPosition }: Props) => {
  const router = useRouter();

  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [currentPositionMarker, setCurrentPositionMarker] = useState<mapboxgl.Marker | null>(null);

  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === 'undefined' || node === null) return;

    const currentMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: currentPosition
        ? [
          currentPosition.coordinates.longitude,
          currentPosition.coordinates.latitude
        ]
        : [1.1, 49.5],
      zoom: currentPosition?.zoom || 9,
    });
    
    currentMap.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    setMap(currentMap);

    data.forEach((dumpster: Dumpster) => {
      const el = document.createElement('div');
      el.className = 'marker';

      new mapboxgl.Marker(el)
        .setLngLat([dumpster.coordonnee.longitude, dumpster.coordonnee.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(`<p>${dumpster.id}</p>`))
        .addTo(currentMap);
    });

    return () => {
      currentMap.remove();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (map) {
        map.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 15,
          bearing: 0,
          essential: true,
        });
        if (currentPositionMarker) currentPositionMarker.remove();

        const el = document.createElement('div');
        el.className = 'marker';

        const marker = new mapboxgl.Marker(el)
          .setLngLat([position.coords.longitude, position.coords.latitude])
          .addTo(map);
        setCurrentPositionMarker(marker);
      }
    });
  };

  const handleFlyTo = (city: PreparedCity) => {
    if (map) {
      router.push(`/map/${city.id}`, undefined, { shallow: true });
      map.flyTo({
        center: [city.coordinates.longitude, city.coordinates.latitude],
        zoom: city.zoom || 13,
        bearing: city.bearing || 0,
        essential: city.essential || true,
      });
    }
  };

  return (
    <Container>
      <div ref={mapNode} style={{ width: '100%', height: '95vh' }} />
      <Pannel>
        <FlyToCityButton onClick={handleCurrentPosition} className="nav-button map">
          <div>
            <FontAwesomeIcon icon={faMapMarker} size="xs" />
          </div>
        </FlyToCityButton>
        <Filters>
          {preparedCities.map((city: PreparedCity) => (
            <FlyToCity
              key={city.id}
              onClick={() => handleFlyTo(city)}
              className="nav-button"
            >
              {city.name}
            </FlyToCity>
          ))}
        </Filters>
      </Pannel>
    </Container>
  );
};

const Container = styled.div`
  .marker {
    /* width: 10px; */
    /* height: 10px; */
    /* border-radius: 5px; */
    background-color: #fff;
    /* border: 1px solid #ffffff; */
    cursor: pointer;

    /* .pin2 { */
  /* position: absolute;
  top: 40%;
  left: 50%;
  margin-left: 115px; */
  /* position: relative; */
  border-radius: 50%;
  border: 5px solid #006b26;
  width: 5px;
  height: 5px;
/* } */

:after {
  position: absolute;
  content: '';
  width: 0px;
  height: 0px;
  bottom: -12px;
  left: -2px;
  border: 5px solid transparent;
  border-top: 5px solid #006b26;
}
  }
`;

const Pannel = styled.div`
  position: absolute;
  top: 10%;
  left: 1%;
  width: 300px;
`;

const FlyToCityButton = styled.button<{ active?: boolean }>`
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#FFF' : '#789089')};
  color: ${({ active }) => (active ? '#000' : '#FFF')};
  cursor: pointer;
  margin-bottom: 5px;
  border: none;
  transition: all 0.3s ease-in-out;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 600;
  margin-right: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #006b26;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }

  :hover {
    background-color: #4f5f5a;
  }
`;

const FlyToCity = styled.button<{ active?: boolean }>`
  border-radius: 15px;
  background-color: ${({ active }) => (active ? '#FFF' : '#789089')};
  color: ${({ active }) => (active ? '#000' : '#FFF')};
  padding: 5px 20px;
  cursor: pointer;
  margin-bottom: 5px;
  border: none;
  transition: all 0.3s ease-in-out;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 600;
  margin-right: 5px;

  :hover {
    background-color: #4f5f5a;
  }
`;

const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default Mapbox;
