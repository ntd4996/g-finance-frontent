import { Button, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../../../stores/layout";
import styles from "./blog.module.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { TransitionProps } from "@mui/material/transitions";
import ContainerBlog from "../../../components/pages/admin/blog/ContainerBlog";
import { useRouter } from "next/router";
import AdminServices from "../../../services/admin";
import { LoadingButton } from "@mui/lab";

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => (
    // @ts-ignore
    <Slide direction="up" ref={ref} {...props} />
));

export default function DetailBlog() {
    const Dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [openDeleteComplete, setOpenDeleteComplete] = React.useState(false);
    const router = useRouter();
    const { slug } = router.query;
    const [blog, setBlog] = useState({} as any);
    const [loading, setLoading] = useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };
    const handleClickOpenDeleteComplete = () => {
        setOpenDeleteComplete(true);
    };

    const handleCloseDeleteComplete = () => {
        setOpenDeleteComplete(false);
        router.push("/admin/blog");
    };

    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsBack(true));
        Dispatch(currentLayoutSlice.actions.updateIsLogin(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        Dispatch(currentLayoutSlice.actions.updateValueNav(-1));
        Dispatch(currentLayoutSlice.actions.updateTitle("Chỉnh Sửa Blog"));
        Dispatch(currentLayoutSlice.actions.updateIsShowHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowHeaderAdmin(false));
    };

    useEffect(() => {
        changeLayoutState();
    }, []);

    useEffect(() => {
        if (slug) {
            getDetailBlog();
        }
    }, [slug]);

    const getDetailBlog = async () => {
        setLoading(true);
        await AdminServices.getDetailCategory({ slug })
            .then((result) => {
                if (result?.data?.data) {
                    setBlog(result?.data?.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };

    const onSubmitData = async (data: any) => {
        setLoading(true);
        await AdminServices.updateDetailCategory({
            slug,
            body: data,
        })
            .then((result) => {
                if (result?.data?.code === 200) handleClickOpen();
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };

    const deleteBlog = () => {
        handleClickOpenDelete();
    };

    const submitDelete = async () => {
        setLoading(true);
        await AdminServices.deleteItemInCategory({
            slug,
        })
            .then((result) => {
                if (result?.data?.code === 200) {
                    handleCloseDelete();
                    handleClickOpenDeleteComplete();
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };

    return (
        <div className="w-full">
            <ContainerBlog
                onSubmitData={onSubmitData}
                isCreate={false}
                blog={blog}
                onDeleteData={deleteBlog}
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
                        Chỉnh sửa blog thành công
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openDelete}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseDelete}
                aria-describedby="alert-dialog-slide-description"
                maxWidth={"xs"}
                fullWidth={true}
            >
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        className={styles.titleDialog}
                    >
                        Bạn có chắc chắn muỗn xóa bài viết này không?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <LoadingButton
                        variant="outlined"
                        color="warning"
                        onClick={handleCloseDelete}
                        loading={loading}
                    >
                        Hủy
                    </LoadingButton>
                    <LoadingButton
                        variant="outlined"
                        onClick={submitDelete}
                        loading={loading}
                    >
                        OK
                    </LoadingButton>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openDeleteComplete}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseDeleteComplete}
                aria-describedby="alert-dialog-slide-description"
                maxWidth={"xs"}
                fullWidth={true}
            >
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        className={styles.titleDialog}
                    >
                        Xóa blog thành công
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        onClick={handleCloseDeleteComplete}
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
