import { AppProps } from "next/app";
import Layout from "../components/organisms/Layout";
import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "../stores";
import { useRouter } from "next/router";
import { useEffect } from "react";

const store = useStore;
const persist = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
    const { asPath } = useRouter();
    useEffect(() => {
        storePathValues();
    }, [asPath]);

    const storePathValues = () => {
        const storage = globalThis?.sessionStorage;
        if (!storage) return;
        // Set the previous path as the value of the current path.
        const prevPath = storage.getItem("currentPath");
        storage.setItem("prevPath", prevPath as string);
        // Set the current path value by looking at the browser's location object.
        storage.setItem("currentPath", globalThis.location.pathname);
    };
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
