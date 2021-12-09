import '../styles/reset.css';
import '../styles/styles.css';

import React from 'react';

import type { AppProps } from 'next/app';
import { NextPage } from 'next';

import Layout from '@components/Layout';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
