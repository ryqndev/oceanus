import { useCallback, useRef, useState } from "react";
import { Map } from "../../components/Map/Map";
import cn from "./Dashboard.module.scss";
import { parseFITArrayBuffer } from "../../controllers/FITParser";
import { XYChart } from "../../components/charts/XYChart.tsx";

type TimestampedRecords<T> = {
    x: Date;
    y: T;
}[];

export const Dashboard = () => {
    const fileUploadRef = useRef<HTMLInputElement>(null);
    const [depthRecords, setDepthRecords] =
        useState<TimestampedRecords<number> | null>(null);

    const upload = useCallback(async () => {
        const file = fileUploadRef.current?.files?.[0];

        if (!file) return;

        const fileAsArrayBuffer = await file?.arrayBuffer();

        const data = await parseFITArrayBuffer(fileAsArrayBuffer);

        const mappedDepthRecords = data.records.map((dataPoint) => ({
            x: new Date(dataPoint.timestamp),
            y: dataPoint.depth,
        }));
        setDepthRecords(mappedDepthRecords);
    }, []);

    return (
        <div className={cn.dashboard}>
            <div className={cn.map}>
                <Map></Map>
            </div>

            {/* <input
                ref={fileUploadRef}
                type="file"
                accept="*"
                onChange={upload}
            /> */}
            {depthRecords && (
                <XYChart width={500} height={300} data={depthRecords} />
            )}
        </div>
    );
};
