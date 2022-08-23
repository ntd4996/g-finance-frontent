import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardButton from "../../components/atoms/CardButton";
import Carousel from "../../components/atoms/Carousel";
import ListButton from "../../components/atoms/ListButton";
import RanksTableWithChart from "../../components/atoms/RanksTableWithChart";
import { currentLayoutSlice } from "../../stores/layout";

export default function Home() {
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
}
