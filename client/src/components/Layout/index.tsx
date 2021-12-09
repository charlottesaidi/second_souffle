import React, { FC, ReactNode } from 'react';

import Header from '../Header';
import Footer from '../Footer';


type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => (
  <div>
    {/** <head /> */}
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;