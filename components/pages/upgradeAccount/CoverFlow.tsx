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
                // spaceBetween={100}
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
                            <div className={styles.titleMonth}>1 THÁNG</div>
                            <div className={styles.titleG}>200 G</div>
                            <div className={styles.titleBuy}>
                                (1G = 1000 VND)
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.contentCard}>
                            <div className={styles.titleMonth}>6 THÁNG</div>
                            <div className={styles.titleG}>1000 G</div>
                            <div className={styles.titleBuy}>
                                (1G = 1000 VND)
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.contentCard}>
                            <div className={styles.titleMonth}>12 THÁNG</div>
                            <div className={styles.titleG}>2000 G</div>
                            <div className={styles.titleBuy}>
                                (1G = 1000 VND)
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
