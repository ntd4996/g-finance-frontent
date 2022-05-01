import { AppProps } from "next/app";
import { Component, ReactNode } from "react";
import Layout from "../components/organisms/Layout";
import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} className="container" />
        </Layout>
    );
}

export default MyApp;
