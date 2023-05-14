import Header from './Header';
import { Tabs } from './Tabs';
import styled from 'styled-components';
import { ReactNode } from 'react';

const MyMain = styled.main``;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      {/* Set background color here */}
      <MyMain className="flex-1 text-black bg-white p-2">
        {children}
      </MyMain>
      <div className="fixed bottom-0 w-full ">
        <Tabs />
      </div>
    </div>
  );
}

export default Layout;
