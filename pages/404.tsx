import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../stores/layout";

const NotFound = () => {
    const router = useRouter();
    const [counter, setCounter] = useState(5);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        dispatch(currentLayoutSlice.actions.updateIsShowHeader(false));
        setTimeout(() => {
            router.push("/home");
        }, 5000);
    }, []);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <div className="not-found w-full py-20">
            <div className="containerComingSoon">
                <span className="textComingSoon1"> Coming Soon </span>
                <br />
                <br />
                <span className="textComingSoon2 capitalize">
                    Bạn sẽ được chuyển về trang chủ trong {counter} giây
                </span>
            </div>
        </div>
    );
};

export default NotFound;
