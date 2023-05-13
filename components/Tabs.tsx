import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaHome, FaImage } from "react-icons/fa";
import { RiVipCrownLine } from "react-icons/ri";

const tabs = [
  // TODO: Add more tabs
  { name: "Home", path: "/", icon: FaHome },
  { name: "NFTs", path: "/nfts", icon: FaImage },
  { name: "Ranking", path: "/ranking", icon: RiVipCrownLine },
];

export function Tabs() {
  const router = useRouter();

  return (
    <nav className="w-full max-w-[425px] fixed bottom-0 z-[999] h-fit bg-black">
      <div role="tablist" className="flex flex-row justify-center">
        {tabs.map((tab) => {
          const isActive = router.pathname === tab.path;
          return (
            <Link key={tab.path} href={tab.path}>
              <div
                className={`flex-1 px-2 py-1 m-4 hover:text-[#E6813E] rounded-2xl ${
                  isActive
                    ? "text-black bg-[#E6813E] hover:text-white"
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
