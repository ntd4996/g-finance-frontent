import Image from "next/image";
import React from "react";
import styles from "./TabOverView.module.scss";

export default function TabOverView(props: any) {
    const { data } = props;

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
                <div className={styles.information}>
                    <div>
                        {data?.profile?.logo_url ? (
                            <div className={styles.logo}>
                                <Image
                                    src={data?.profile?.logo_url}
                                    alt="logo"
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="fill"
                                />
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div>
                        <div>
                            <span className="font-bold">Điện thoại:</span>{" "}
                            <a
                                href={`tel:${data?.profile?.telephone}`}
                                className="textLink"
                            >
                                {data?.profile?.telephone}
                            </a>
                        </div>
                        <div>
                            <span className="font-bold">Website:</span>{" "}
                            <a
                                href={`https://${data?.profile?.website}`}
                                className="textLink"
                                rel="noreferrer"
                                target="_blank"
                            >
                                {data?.profile?.website}
                            </a>
                        </div>
                        <div>
                            <span className="font-bold">MST:</span>{" "}
                            <span>{data?.profile?.enterprise_code}</span>
                        </div>
                        <div>
                            <span className="font-bold">Fax:</span>{" "}
                            <span>{data?.profile?.fax}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="font-bold">Địa chỉ:</span>{" "}
                    {data?.profile?.address}
                </div>
                <div>{data?.profile?.intro}</div>
            </div>
        </div>
    );
}
