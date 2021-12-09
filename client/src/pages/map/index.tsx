import Page from '@components/Page';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { getAllDumpsters } from 'src/stores/dumpsters';
import MapBox from '../../components/Mapbox';

import type { Dumpster } from 'src/types/dumpster';

const MapPage: NextPage = () => {
  const [dumpsters, setDumpsters] = useState<Dumpster[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllDumpsters();
      console.log(data);

      setDumpsters(data || []);
    };
    fetchData();
  }, []);

  return (
    <Page name={'Carte'}>
      <MapBox />
    </Page>  
  );
};


export default MapPage;