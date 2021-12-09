import MapPage from '..';

MapPage.getInitialProps = async ({ query }) => {
  const { cityId } = query;

  return { defaultCityId: cityId };
};

export default MapPage;