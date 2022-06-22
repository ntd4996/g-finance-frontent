import React from "react";
import styles from "./CoverFlow.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
SwiperCore.use([EffectCoverflow]);

export default function CoverFlow() {
    return (
        <div>
            <Swiper
                effect="coverflow"
                centeredSlides={true}
                slidesPerView={2}
                loop={false}
                initialSlide={1}
                speed={600}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                className={styles.container}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    560: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.contentCard}>
                            <div className={styles.title}>GÓI VIP 1</div>
                            <div className={styles.titleG}>200 G</div>
                            <div className={styles.titleMonth}>
                                1 THÁNG{" "}
                                <span className={styles.discount}>(-10%)</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.contentCard}>
                            <div className={styles.title}>
                                GÓI VIP 6{" "}
                                <span className={styles.discount}>(-15%)</span>
                            </div>
                            <div className={styles.titleG}>1000 G</div>
                            <div className={styles.titleMonth}>+ 6 THÁNG</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.contentCard}>
                            <div className={styles.title}>GÓI VIP 12</div>
                            <div className={styles.titleG}>2000 G</div>
                            <div className={styles.titleMonth}>
                                + 12 THÁNG{" "}
                                <span className={styles.discount}>(-20%)</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={styles.note}>(1G = 1000VND)</div>
        </div>
    );
}
