import Header from './Header';
import { Tabs } from './Tabs';
import styled from 'styled-components';
import Link from 'next/link';
import { ReactNode } from 'react';

const MyMain = styled.main``;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-screen max-w-[425px] flex flex-col">
      <Header />
      {/* Set background color here */}
      <MyMain className="flex-1 text-black bg-white">
        {children}
      </MyMain>
      <div className="fixed bottom-0 w-full max-w-[425px]">
        <Tabs />
        {/* <div className="flex flex-row items-center justify-center gap-2 text-[8px] font-light py-2 bg-black">
          <p>Powered by</p>
          <Link href="https://builderz.dev">
            <a target="_blank" rel="noreferrer">
              <img src="/img/builderz.svg" alt="builderz logo" />
            </a>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Layout;
