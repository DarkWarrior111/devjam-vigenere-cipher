import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="min-h-screen w-full dark:bg-gray-700 dark:text-white">
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
