import { AppProps } from "next/app";
import Layout from "../components/organisms/Layout";
import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "../stores";

const store = useStore;
const persist = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persist}>
                <Layout>
                    <Component {...pageProps} className="container" />
                </Layout>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
