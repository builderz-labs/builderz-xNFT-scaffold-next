import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

class ErrorBoundary extends Component<Props> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Optionally, you can render a fallback UI
      return <h1>An error occurred</h1>;
    }

    return this.props.children;
  }
}

import type { AppProps } from "next/app";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css'

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import ContextProvider from "../contexts/ContextProvider";
import { ToastContainer } from 'react-toastify';
import themes from "../components/themes";
import Layout from "../components/Layout";

declare global {
  interface Window {
    xnft: any;
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, _setTheme] = useState(themes.light);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme} >
        <ContextProvider>
          <CssBaseline enableColorScheme />
          <Layout>
            <Component {...pageProps} />
          </Layout>
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
}

export default App;
