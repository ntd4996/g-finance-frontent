import React from "react";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../../libs/theme";
import { RootState } from "../../../stores";
import { currentAccountSlice } from "../../../stores/account";
import PawnChess from "../../icons/PawnChess";
import QueenChess from "../../icons/QueenChess";
import styles from "./FreeUser.module.scss";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputAdornment,
    Slide,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { TransitionProps } from "@mui/material/transitions";
import CoverFlow from "./CoverFlow";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FreeUser() {
    const { isUserVip } = useSelector((state: RootState) => state.account);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();
    const upgradeAccount = () => {
        dispatch(currentAccountSlice.actions.updateIsUserVip(true));
    };
    return (
        <div className="w-full px-8">
            {isUserVip ? (
                <div>
                    <div className={styles.container}>
                        <div>
                            <div className={styles.title}>Gói của bạn</div>
                            <div className={styles.textVip}>
                                <QueenChess />
                                VIP 6
                            </div>
                        </div>
                        <div>
                            <div className={styles.title}>Thời hạn VIP</div>
                            <div className={styles.textTime}>Còn 124 ngày</div>
                            <div>
                                Đến{" "}
                                <span className="font-bold">
                                    22h - 22/08/2022
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonRegister}>
                        <Button
                            color="secondary"
                            variant="contained"
                            style={{
                                backgroundColor: theme.palette.secondary.main,
                                width: "100%",
                                height: "48px",
                                marginBottom: "1rem",
                                borderRadius: "8px",
                                fontSize: "14px",
                            }}
                            onClick={handleClickOpen}
                        >
                            Gia hạn VIP User
                        </Button>
                    </div>
                </div>
            ) : (
                <div className={styles.container}>
                    <div>
                        <div className={styles.title}>Gói của bạn</div>
                        <div className={styles.textVip}>
                            <PawnChess />
                            Free
                        </div>
                    </div>
                    <div>
                        <Button
                            color="secondary"
                            variant="contained"
                            style={{
                                backgroundColor: theme.palette.secondary.main,
                                width: "100%",
                                height: "48px",
                                borderRadius: "8px",
                                fontSize: "14px",
                            }}
                            onClick={upgradeAccount}
                        >
                            Đăng ký VIP
                        </Button>
                    </div>
                </div>
            )}

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                classes={{ paper: styles.paper }}
            >
                <DialogTitle
                    sx={{
                        borderBottom: "1px solid #eeeeee",
                        padding: "8px",
                    }}
                >
                    <div className={styles.titleModal}>
                        <div>Gia hạn VIP USER</div>
                        <div className=" absolute right-0">
                            <ClearIcon onClick={handleClose} />
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent sx={{ padding: "0" }}>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        className={styles.contentDialog}
                    >
                        <CoverFlow />
                        <Button
                            color="secondary"
                            variant="contained"
                            style={{
                                backgroundColor: theme.palette.secondary.main,
                                width: "100%",
                                height: "48px",
                                borderRadius: "8px",
                                fontSize: "14px",
                            }}
                            onClick={upgradeAccount}
                        >
                            Gia hạn
                        </Button>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
