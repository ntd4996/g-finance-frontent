import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ContainerAdmin from "../../../components/pages/admin/Container";
import { currentLayoutSlice } from "../../../stores/layout";
import AdminServices from "../../../services/admin";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { TransitionProps } from "@mui/material/transitions";
import { Button, Slide } from "@mui/material";
import styles from "./info.module.scss";

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => (
    // @ts-ignore
    <Slide direction="up" ref={ref} {...props} />
));

export default function GFinance() {
    const Dispatch = useDispatch();
    const [guide, setGuide] = useState({} as any);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        changeLayoutState();
        getGuide();
        return () => {
            Dispatch(currentLayoutSlice.actions.updateIsShowButtonAdmin(false));
        };
    }, []);

    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsShowHeaderAdmin(true));
        Dispatch(currentLayoutSlice.actions.updateIsFixedHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        Dispatch(currentLayoutSlice.actions.updateIsShowButtonAdmin(true));
    };

    const getGuide = async () => {
        setLoading(true);
        await AdminServices.getListOfCategory({ category: "info" })
            .then((result) => {
                if (result?.data?.data) {
                    console.log("🚀 ~ result?.data?.data", result?.data?.data);
                    if (result?.data?.data?.length > 0) {
                        setGuide(result?.data?.data[0]);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };

    const onSubmitData = async (data: any) => {
        setLoading(true);
        console.log("🚀 ~ data", data);
        if (guide?.id) {
            await AdminServices.updateDetailCategory({
                slug: guide?.slug,
                body: data,
            })
                .then((result) => {
                    if (result?.data?.code === 200) handleClickOpen();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            await AdminServices.createItemInCategory({
                category: "info",
                body: data,
            })
                .then((result) => {
                    if (result?.data?.code === 200) {
                        handleClickOpen();
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        setLoading(false);
    };

    return (
        <div className="w-full">
            <ContainerAdmin
                onSubmitData={onSubmitData}
                breadcrumb="Quản lý liên hệ"
                guide={guide}
                loading={loading}
            />
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth={"xs"}
                fullWidth={true}
            >
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        className={styles.titleDialog}
                    >
                        Cập nhật thành công Hưỡng dẫn chung
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
