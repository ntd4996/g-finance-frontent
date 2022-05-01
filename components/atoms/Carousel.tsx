import React, { useState } from "react";
import Image from "next/image";
import styles from "./Carousel.module.scss";
import { useKeenSlider } from "keen-slider/react";

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    return (
        <div className="relative">
            <div className={styles.navigationWrapper}>
                <div
                    ref={sliderRef}
                    className={`keen-slider ${styles.containerSlide}`}
                >
                    <div className={styles.divImage}>
                        <div className="keen-slider__slide">
                            <Image
                                src="/slide1.png"
                                alt="slide1"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className={styles.divImage}>
                        <div className="keen-slider__slide ">
                            <Image
                                src="/slide2.jpeg"
                                alt="slide2"
                                layout="fill"
								objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {loaded && instanceRef.current && (
                <div className={styles.positionDot}>
                    <ul className={styles.dots}>
                        {[
                            ...Array(
                                instanceRef.current.track.details.slides.length
                            ).keys(),
                        ].map((idx) => {
                            return (
                                <li
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx);
                                    }}
                                    className={
                                        currentSlide === idx
                                            ? styles.active
                                            : ""
                                    }
                                ></li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
