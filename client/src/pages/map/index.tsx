import React, { useEffect, useState } from 'react';

import Page from '@components/Page';
import { NextPage } from 'next';
import { getAllDumpsters } from 'src/stores/dumpsters';
import Mapbox from '@components/Mapbox';

import type { Dumpster } from 'src/types/dumpster';

type PreparedCity = {
  id: string;
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  zoom?: number;
  bearing?: number;
  essential?: boolean;
};

type Props = {
  defaultCityId?: any;
}

const MapPage: NextPage<Props> = ({ defaultCityId }: Props) => {
  const [dumpsters, setDumpsters] = useState<Dumpster[]>([]);

  const preparedCities: PreparedCity[] = [
    {
      id: 'paris',
      name: 'Paris',
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
      zoom: 12,
    },
    {
      id: 'lyon',
      name: 'Lyon',
      coordinates: {
        latitude: 45.7597,
        longitude: 4.8422,
      },
      zoom: 12,
    },
    {
      id: 'montpellier',
      name: 'Montpellier',
      coordinates: {
        latitude: 43.6107,
        longitude: 3.8767,
      },
      zoom: 12,
    },
    {
      id: 'marseille',
      name: 'Marseille',
      coordinates: {
        latitude: 43.2964,
        longitude: 5.3697,
      },
      zoom: 12,
    },
    {
      id: 'toulouse',
      name: 'Toulouse',
      coordinates: {
        latitude: 43.6044,
        longitude: 1.4439,
      },
      zoom: 12,
    },
  ];

  const defaultCity: PreparedCity | undefined = preparedCities.find((city) => city.id === defaultCityId);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllDumpsters();

      setDumpsters(data || []);
    };
    fetchData();
  }, []);

  return (
    <Page name={'Carte'}>
      <Mapbox data={dumpsters} preparedCities={preparedCities} currentPosition={defaultCity} />
    </Page>  
  );
};

export type { PreparedCity };
export default MapPage;