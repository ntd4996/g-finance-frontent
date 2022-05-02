import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardButton from "../components/atoms/CardButton";
import Carousel from "../components/atoms/Carousel";
import ListButton from "../components/atoms/ListButton";
import RanksTableWithChart from "../components/atoms/RanksTableWithChart";
import { currentLayoutSlice } from "../stores/layout";

const Home: NextPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currentLayoutSlice.actions.reset());
    }, []);

    return (
        <div className="container">
            <Carousel />
            <ListButton />
            <CardButton />
            <RanksTableWithChart />
        </div>
    );
};

export default Home;
