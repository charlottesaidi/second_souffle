import React, { FC } from 'react';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";



const MapBox: FC = () => {
    const [map, setMap] = React.useState<mapboxgl.Map>();
    const mapNode = React.useRef(null);
  
    React.useEffect(() => {
      const node = mapNode.current;
          // if the window object is not found, that means
          // the component is rendered on the server
          // or the dom node is not initialized, then return early
      if (typeof window === "undefined" || node === null) return;
  
          // otherwise, create a map instance
      const mapboxMap = new mapboxgl.Map({
        container: node,
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
              style: "mapbox://styles/mapbox/streets-v11",
        center: [1.1, 49.5],
        zoom: 9,
      });
  
      // save the map object to React.useState
      setMap(mapboxMap);
  
      return () => {
        mapboxMap.remove();
      };
    }, []);
    return <div ref={mapNode} style={{ width: "1000px", height: "880px" }} />;
};
  
export default MapBox;