import { Metadata } from 'next';
import AllProvider from '@contexts/AllProvider';
import "@styles/globals.css";
import Header from '@components/Header';
import { Tabs } from '@components/Tabs';

declare global {
    interface Window {
        xnft: any;
    }
}

export const metadata: Metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
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
                        <main className="flex-1 text-black bg-white p-2">
                            {children}
                        </main>
                        <div className="fixed bottom-0 w-full ">
                            <Tabs />
                        </div>
                    </div>
                </AllProvider>
            </body>
        </html>
    )
}

export default RootLayout