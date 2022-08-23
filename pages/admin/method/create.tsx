import { Button, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../../../stores/layout";
import styles from "./method.module.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { TransitionProps } from "@mui/material/transitions";
import ContainerMethod from "../../../components/pages/admin/method/ContainerMethod";
import AdminServices from "../../../services/admin";
import { useRouter } from "next/router";

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => (
    // @ts-ignore
    <Slide direction="up" ref={ref} {...props} />
));

export default function CreateMethod() {
    const Dispatch = useDispatch();
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsBack(true));
        Dispatch(currentLayoutSlice.actions.updateIsLogin(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        Dispatch(currentLayoutSlice.actions.updateValueNav(-1));
        Dispatch(
            currentLayoutSlice.actions.updateTitle("Thêm Mới Phương Pháp")
        );
        Dispatch(currentLayoutSlice.actions.updateIsShowHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowHeaderAdmin(false));
    };

    useEffect(() => {
        changeLayoutState();
    }, []);

    const onSubmitData = async (data: any) => {
        setLoading(true);
        await AdminServices.createItemInCategory({
            category: "methods",
            body: data,
        })
            .then((result) => {
                if (result?.data?.code === 200) {
                    handleClickOpen();
                    router.push("/admin/method");
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };

    return (
        <div className="w-full">
            <ContainerMethod
                onSubmitData={onSubmitData}
                isCreate
                onDeleteData={() => {}}
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
                        Thêm mới Phương Pháp thành công
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
