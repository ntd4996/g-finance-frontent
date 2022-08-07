import React from "react";
import Pagination from "@mui/material/Pagination";

interface propsType {
    totalPage: number;
    defaultPage: number;
    onChangePage: (
        event: React.ChangeEvent<unknown>, page: number
    ) => void;
}

export default function Paginator(props: propsType) {
    const { totalPage, defaultPage, onChangePage } = props;
    return (
        <>
            {totalPage > 0 && (
                <div className="flex justify-center my-5">
                    <Pagination
                        count={totalPage}
                        page={defaultPage + 1}
                        color="secondary"
                        onChange={onChangePage}
                    />
                </div>
            )}
        </>
    );
}
