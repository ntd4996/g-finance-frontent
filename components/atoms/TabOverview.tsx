import Image from "next/image";
import React, { FC } from "react";
import styles from "./TabOverView.module.scss";
export default function TabOverView(props: any) {
    const { data } = props;
    console.log(data);

    const RenderMetadata: FC = () => {
        let renderObj;
        if (data?.metadata) {
            renderObj = Object.keys(data?.metadata).map((key) => {
                return (
                    <div className={styles.flexCol}>
                        <div className={styles.title}>{key}</div>
                        <div className={styles.contentMeta}>
                            <span
                                className={
                                    data?.metadata[key] > 0
                                        ? styles.textGreen
                                        : styles.textRed
                                }
                            >
                                {parseFloat(data?.metadata[key]).toFixed(2)}
                            </span>
                        </div>
                    </div>
                );
            });
        }
        return <div className={styles.gird}>{renderObj}</div>;
    };

    return (
        <div className="w-full container">
            <div className={styles.tradingView}>Tradingview</div>
            <RenderMetadata />

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
