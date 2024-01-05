import { Metadata } from 'next';
import AllProvider from '@contexts/AllProvider';
import "@styles/globals.css";
import Header from '@components/Header';
import { Tabs } from '@components/Tabs';
import Footer from '@components/Footer';

declare global {
    interface Window {
        xnft: any;
    }
}

export const metadata: Metadata = {
    title: 'Builderz xNFT Scaffold',
    description: 'Builderz Solana xNFT Nextjs Scaffold',
}

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <body>
                <AllProvider>
                    <div className="h-screen w-full flex flex-col">
                        <Header />
                        {/* Set background color here */}
                        <main className="flex-1 text-black bg-light-mesh !bg-opacity-50 p-2">
                            {children}
                        </main>
                        <div className="fixed bottom-0 w-full ">
                            <Tabs />
                        </div>
                        <Footer />
                    </div>
                </AllProvider>
            </body>
        </html>
    )
}

export default RootLayout