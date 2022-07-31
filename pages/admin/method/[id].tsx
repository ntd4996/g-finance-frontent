import { Button, Slide } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../../../stores/layout";
import styles from "./method.module.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { TransitionProps } from "@mui/material/transitions";
import ContainerMethod from "../../../components/pages/admin/method/ContainerMethod";

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => (
    // @ts-ignore
    <Slide direction="up" ref={ref} {...props} />
));

export default function DetailMethod() {
    const Dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

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
        Dispatch(currentLayoutSlice.actions.updateTitle("Chỉnh Sửa Phương Pháp"));
        Dispatch(currentLayoutSlice.actions.updateIsShowHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowHeaderAdmin(false));
    };

    useEffect(() => {
        changeLayoutState();
    }, []);

    const onSubmitData = (data: any) => {
        console.log("🚀 ~ data", data);
        handleClickOpen();
    };

    return (
        <div className="w-full">
            <ContainerMethod onSubmitData={onSubmitData} isCreate={false} />

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
                        Chỉnh sửa phương pháp thành công
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
