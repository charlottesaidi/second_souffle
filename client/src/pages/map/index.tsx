import Page from '@components/Page';
import { NextPage } from 'next';
import React from 'react';
import MapBox from "../../components/Mapbox";



const MapPage: NextPage = () => {
  return (
    <Page name={'Carte'}>
      <h1>Carte</h1>
      <MapBox/>
    </Page>  
  )
};

export default MapPage;