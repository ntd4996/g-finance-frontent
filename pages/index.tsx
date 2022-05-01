import type { NextPage } from "next";
import Carousel from "../components/atoms/Carousel";

const Home: NextPage = () => {
    return (
        <div className="container">
            <Carousel />
        </div>
    );
};

export default Home;
