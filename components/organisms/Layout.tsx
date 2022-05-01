import { ReactNode } from "react";
import Header from "./Header";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar";

type MyComponentProps = React.PropsWithChildren<{
    children: ReactNode;
}>;
const Layout = ({ children }: MyComponentProps) => {
    return (
        <div className={styles.layout}>
            <Header />
            {children}
            <Navbar />
        </div>
    );
};

export default Layout;
