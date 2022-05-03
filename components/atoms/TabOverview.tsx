import React from "react";
import styles from "./TabOverView.module.scss";

export default function TabOverView() {
    return (
        <div className="w-full container">
            <div className={styles.tradingView}>Tradingview</div>
            <div className={styles.flexRow}>
                <div className={styles.flexCol}>
                    <div className={styles.title}>VỐN HÓA</div>
                    <div>2.600 tỷ</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>SỐ LƯỢNG CP</div>
                    <div>80.000.000</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>EPS</div>
                    <div>7.014</div>
                </div>
            </div>

            <div className={styles.flexRow}>
                <div className={styles.flexCol}>
                    <div className={styles.title}>BOOK VALUE</div>
                    <div>15.182</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>P/E</div>
                    <div>4.6</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>P/B</div>
                    <div>21</div>
                </div>
            </div>

            <div className={styles.flexRow}>
                <div className={styles.flexCol}>
                    <div className={styles.title}>ROE</div>
                    <div className={styles.textGreen}>48.4%</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>ROA</div>
                    <div className={styles.textGreen}>32.9%</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>TB KLGD</div>
                    <div>292.210</div>
                </div>
            </div>

            <div className={styles.flexRow}>
                <div className={styles.flexCol}>
                    <div className={styles.title}>TB GTGD</div>
                    <div>9.5 tỷ</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>GDNN</div>
                    <div className={styles.textGreen}>-1.3 tỷ</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>SỞ HỮU NN</div>
                    <div className={styles.textGreen}>0.2%</div>
                </div>
            </div>

            <div className={styles.flexRow}>
                <div className={styles.flexCol}>
                    <div className={styles.title}>NỢ/VCSH</div>
                    <div className={styles.textGreen}>0.4</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>BIÊN LỢI NHUẬN</div>
                    <div className={styles.textGreen}>51.0%</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>+/- 5 PHIÊN</div>
                    <div className={styles.textGreen}>4.8%</div>
                </div>
            </div>

            <div className={styles.flexRow}>
                <div className={styles.flexCol}>
                    <div className={styles.title}>+/- 20 PHIÊN</div>
                    <div className={styles.textGreen}>15.182</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>+/- 60 PHIÊN</div>
                    <div className={styles.textRed}>-0.16%</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>UPDATE BC</div>
                    <div>Q4 2021</div>
                </div>
            </div>

            <div className={styles.titleContent}>Thông tin doanh nghiệp</div>
            <div className={styles.content}>
                &nbsp; &nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
                <br /> &nbsp; &nbsp; &nbsp; Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
                felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
                Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
                nibh. Mauris sit amet magna non ligula vestibulum eleifend.
                Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus
                lobortis eleifend. Sed nec ante dictum sem condimentum
                ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
                posuere leo.
            </div>
        </div>
    );
}
