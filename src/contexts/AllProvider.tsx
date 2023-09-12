'use client'
import ErrorBoundary from '@components/ErrorBoundary';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import ContextProvider from "@contexts/ContextProvider";
import { ToastContainer } from 'react-toastify';
import themes from "@components/themes";
import { FC, ReactNode } from "react";


export const AllProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [theme, _setTheme] = useState(themes.light);
    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme} >
                <ContextProvider>
                    <CssBaseline enableColorScheme />
                        { children }
                </ContextProvider>
                {/* Change Notification settings here */}
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme={theme.palette.mode === "dark" ? "light" : "dark"}
                />
            </ThemeProvider>
        </ErrorBoundary>
    );
};

export default AllProvider;
