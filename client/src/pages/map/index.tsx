import Page from '@components/Page';
import { NextPage } from 'next';
import React from 'react';
import MapBox from "../../components/Mapbox";



const MapPage: NextPage = () => {
  return (
    <Page name={'Carte'}>
      <MapBox/>

    </Page>  
  )
};


export default MapPage;