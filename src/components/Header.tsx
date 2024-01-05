'use client'
import { useMemo } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Logo } from '@components/Logo';

const basePaths = ['/']; // Add more paths here if needed

const MyHeader = styled.header`
  background: #ddd;
`;

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const title = useMemo(() => {
    if (pathname !== '/') {
      const segments = pathname!.split('/');
      return pathname!.split('/')[segments.length - 1].replace('%20', " ");
    }
    return (
      <div className="flex items-center">
        <Logo />
      </div>
    );
  }, [pathname]);

  return (
    <MyHeader className="w-full h-fit">
      <div className="h-14 flex justify-between items-center gap-1 bg-white shadow-2xl border-b border-b-gray-800 p-2 border-b-0.5">
        <div className="flex items-center gap-4">
          {!basePaths.some(base => pathname === base) && (
            <button type='button' title='Back' onClick={() => router.back()}>
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
