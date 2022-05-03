import React from "react";
import Image from "next/image";
import styles from "./detail.module.scss";
import Clock from "../../../components/icons/Clock";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function DetailFindNews() {
    const router = useRouter();

    return (
        <div className="w-full py-20">
            <div className="w-full px-5">
                <div className={styles.back}>
                    <IconButton
                        aria-label="delete"
                        className={styles.colorButton}
                        onClick={() => {
                            router.back();
                        }}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                    Elon Musk bị cựu cổ đông Twitter kiện v...
                </div>
                <div className={styles.image}>
                    <Image
                        src="/mus.png"
                        alt="news"
                        width="100%"
                        height="128px"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className={styles.title}>
                    Elon Musk bị cựu cổ đông Twitter kiện vì chậm công bố thông
                    tin
                </div>
                <div className={styles.flexRow}>
                    <div className="flex gap-2 justify-center">
                        <Clock /> 10/03/2022 - 08:46
                    </div>
                    <div>
                        Nguồn:<span className={styles.textBlack}> CafeF</span>
                    </div>
                </div>
                <div className={styles.content}>
                    &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                    risus sem sollicitudin lacus, ut interdum tellus elit sed
                    risus. Maecenas eget condimentum velit, sit amet feugiat
                    lectus.
                    <br /> &nbsp;&nbsp;&nbsp; Curabitur tempor quis eros tempus
                    lacinia. Nam bibendum pellentesque quam a convallis. Sed ut
                    vulputate nisi. Integer in felis sed leo vestibulum
                    venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
                    vestibulum vestibulum. Morbi a eleifend magna. Nam metus
                    lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris
                    sit amet magna non ligula vestibulum eleifend. Nulla varius
                    volutpat turpis sed lacinia. Nam eget mi in purus lobortis
                    eleifend.
                    <br /> &nbsp;&nbsp;&nbsp; Sed nec ante dictum sem
                    condimentum ullamcorper quis venenatis nisi. Proin vitae
                    facilisis nisi, ac posuere leo. Nam pulvinar blandit velit,
                    id condimentum diam faucibus at. Aliquam lacus nisi,
                    sollicitudin at nisi nec, fermentum congue felis. Quisque
                    mauris dolor, fringilla sed tincidunt ac, finibus non odio.
                    <br /> &nbsp;&nbsp;&nbsp; Sed vitae mauris nec ante pretium
                    finibus. Donec nisl neque, pharetra ac elit eu, faucibus
                    aliquam ligula. Nullam dictum, tellus tincidunt tempor
                    laoreet, nibh elit sollicitudin felis, eget feugiat sapien
                    diam nec nisl. Aenean gravida turpis nisi, consequat dictum
                    risus dapibus a. Duis felis ante, varius in neque eu, tempor
                    suscipit sem. Maecenas ullamcorper gravida sem sit amet
                    cursus. Etiam pulvinar purus vitae justo pharetra consequat.
                    Mauris id mi ut arcu feugiat maximus. Mauris consequat
                    tellus id tempus aliquet.
                </div>
            </div>
        </div>
    );
}
