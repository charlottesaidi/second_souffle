import React from 'react';

import Head from 'next/head';
import styled from 'styled-components';

type Props = {
  name: string;
  children?: React.ReactNode;
};

const Page: React.FC<Props> = ({ name, children }: Props) => {
  return (
    <Wrapper>
      <Head>
        <title>{name} - EcoVerre</title>
      </Head>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default Page;