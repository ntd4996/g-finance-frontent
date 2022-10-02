import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { RootState } from "../../stores";
import { useSelector } from "react-redux";
import { TransitionProps } from "@mui/material/transitions";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
} from "@mui/material";
import theme from "../../libs/theme";
import { useRouter } from "next/router";

interface Props {
    data: any;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FavoriteHear(props: Props) {
    const router = useRouter();

    const { data } = props;
    const { user } = useSelector((state: RootState) => state.account);
    const [open, setOpen] = React.useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const clickFavorite = () => {
        console.log("🚀 ~ data", data);
        console.log("🚀 ~ user", !!user?.id);
        if (!!user?.id) {
            setIsFavorite(!isFavorite);
        } else {
            handleClickOpen();
        }
    };
    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Bạn cần phải đăng nhập để xử dụng tính năng này!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button
                        onClick={() => {
                            router.push("/login");
                        }}
                    >
                        Đăng nhập
                    </Button>
                </DialogActions>
            </Dialog>
            <div onClick={() => clickFavorite()} className="cursor-pointer">
                {isFavorite ? (
                    <FavoriteOutlinedIcon style={{ color: "#ff4b8d" }} />
                ) : (
                    <FavoriteBorderOutlinedIcon />
                )}
            </div>
        </div>
    );
}
