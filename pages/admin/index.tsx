import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../../stores/layout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import styles from "./admin.module.scss";
import Blog from "../../components/icons/Blog";
import Info from "../../components/icons/Info";
import Document from "../../components/icons/Document";
import Method from "../../components/icons/Method";
import Book from "../../components/icons/Book";

export default function Admin() {
    const Dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        changeLayoutState();
        return () => {
            Dispatch(currentLayoutSlice.actions.updateIsShowHeaderAdmin(false));
            Dispatch(currentLayoutSlice.actions.updateIsFixedHeader(false));
            Dispatch(currentLayoutSlice.actions.updateIsShowNav(true));
        };
    }, []);
    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsShowHeaderAdmin(true));
        Dispatch(currentLayoutSlice.actions.updateIsFixedHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
    };

    return (
        <div className={styles.container}>
            <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 2, sm: 3 }}
                className="w-full"
            >
                <Grid item xs={6} sm={4}>
                    <Card
                        className={styles.card}
                        onClick={() => {
                            router.push("/admin/blog");
                        }}
                    >
                        <CardActionArea>
                            <CardContent className={styles.cardContent}>
                                <Blog />
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    className="capitalize"
                                >
                                    Quản lý Blog
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Card className={styles.card}>
                        <CardActionArea>
                            <CardContent className={styles.cardContent}>
                                <Book />
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    className="capitalize"
                                >
                                    Hưỡng dẫn sử dụng chung
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Card className={styles.card}>
                        <CardActionArea>
                            <CardContent className={styles.cardContent}>
                                <Method />
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    className="capitalize"
                                >
                                    Phương Pháp đầu tư
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Card className={styles.card}>
                        <CardActionArea>
                            <CardContent className={styles.cardContent}>
                                <Document />
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    className="capitalize"
                                >
                                    về Gfinance
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Card className={styles.card}>
                        <CardActionArea>
                            <CardContent className={styles.cardContent}>
                                <Info />
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    className="capitalize"
                                >
                                    Quản lý Liên hệ
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
