'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaImage } from "react-icons/fa";
import { RiVipCrownLine } from "react-icons/ri";

const tabs = [
  // TODO: Add more tabs
  { name: "Home", path: "/", icon: FaHome },
  { name: "NFTs", path: "/nfts", icon: FaImage },
  { name: "Ranking", path: "/ranking", icon: RiVipCrownLine },
];

export function Tabs() {
  const pathname = usePathname();

  return (
    <nav className="w-full fixed bottom-12 z-[999] h-fit bg-white border-t border-t-0.5 border-t-gray-800 shadow-2xl">
      <div role="tablist" className="flex flex-row justify-center">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <Link key={tab.path} href={tab.path}>
              <div
                className={`flex-1 w-20 px-2 py-1 m-4 hover:text-builderz-blue rounded-2xl ${isActive
                  ? "text-builderz-blue "
                  : "text-gray-500"
                  }`}
              >
                <div role="tab" className="flex flex-col items-center">
                  <tab.icon />
                  <span>{tab.name}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
