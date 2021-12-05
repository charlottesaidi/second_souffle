import React from 'react';

import type { NextPage } from 'next';

import Page from '@components/Page';
import SectionChiffre from '@components/HomeSection/SectionChiffre';
import SectionAbout from '@components/HomeSection/SectionAbout';
import SectionVideo from '@components/HomeSection/SectionVideo';
import SectionVille from '@components/HomeSection/SectionVille';

const HomePage: NextPage = () => {
  return (
    <Page
      name="Accueil"
    >
      <SectionVideo />
      <SectionVille />
      <SectionChiffre />
      <SectionAbout />
    </Page>
  );
};

export default HomePage;
