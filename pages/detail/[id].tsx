import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../../stores/layout";
import ToggleButtonDay from "../../components/atoms/ToggleButtonDay";
import DetailTop from "../../components/atoms/DetailTop";
import TabContainer from "../../components/atoms/TabContainer";
import { useRouter } from "next/router";
import TicketServer from "../../services/ticket";

export default function Detail() {
    const Dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    const [dataFetch, setDataFetch] = useState({} as any);
    const [loading, setLoading] = useState(true);
    const [toggleButtonDay, setToggleButtonDay] = useState("now");

    useEffect(() => {
        changeLayoutState();
    }, []);

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);

    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsBack(true));
        Dispatch(currentLayoutSlice.actions.updateIsLogin(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(true));
        Dispatch(currentLayoutSlice.actions.updateValueNav(-1));
        Dispatch(currentLayoutSlice.actions.updateTitle(""));
        Dispatch(currentLayoutSlice.actions.updateIsShowHeader(true));
    };

    const fetchData = async () => {
        await TicketServer.detailTicket({ id: id })
            .then((result) => {
                if (result?.data?.data) {
                    const data = result?.data?.data;
                    Dispatch(
                        currentLayoutSlice.actions.updateTitle(
                            `${data?.component} - ${data?.name}`
                        )
                    );
                    setDataFetch(data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };

    return (
        <div className="pagePaddingTop">
            <DetailTop data={dataFetch} loading={loading} />
            <ToggleButtonDay
                loading={loading}
                changeButtonDay={setToggleButtonDay}
            />
            <TabContainer
                data={dataFetch}
                loading={loading}
                toggleButtonDay={toggleButtonDay}
            />
        </div>
    );
}
