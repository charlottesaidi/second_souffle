import React from 'react';

import type { NextPage } from 'next';

import Page from '@components/Page';
import SectionVideo from '@components/AboutSection/SectionVideo';
import SectionStory from '@components/AboutSection/SectionStory';
import SectionTeam from '@components/AboutSection/SectionTeam';
import SectionMission from '@components/AboutSection/SectionMission';

const HomePage: NextPage = () => {
  return (
    <Page
      name="À propos"
    >
      <SectionVideo />
      <SectionStory />
      <SectionTeam />
      <SectionMission />
    </Page>
  );
};

export default HomePage;
