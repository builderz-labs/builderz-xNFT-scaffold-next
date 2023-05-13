import { useMemo } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

const basePaths = ['/']; // Add more paths here if needed

const MyHeader = styled.header`
  background: #ddd;
`;

export default function Header() {
  const router = useRouter();
  const title = useMemo(() => {
    if (router.pathname !== '/') {
      const segments = router.pathname.split('/');
      return router.pathname.split('/')[segments.length - 1].replace('%20', " ");
    }
    return (
      <div className="flex items-center">
      <Image className="mr-2" src='/renaissance-logo-no-padding.svg' height={28} width={28} alt="logo" />
      <p>
        re<span className="text-[#FF8A57]">:</span>
        <span className="lowercase">naissance</span>
      </p>
      </div>
    );
  }, [router.pathname]);

  return (
    <MyHeader className="w-full h-fit">
      <div className="h-14 flex justify-between items-center gap-1 p-2">
        <div className="flex items-center gap-4">
          {!basePaths.some(base => router.pathname === base) && (
            <button onClick={() => router.back()}>
              <FaChevronLeft />
            </button>
          )}
          <h1 className="text-left text-3xl inline capitalize font-bold">
            {title}
          </h1>
        </div>
      </div>
    </MyHeader>
  );
}
