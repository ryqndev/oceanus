import FitParser from "fit-file-parser";
import type { FIT_File } from "./fit-data";

export const parseFITArrayBuffer = async (
    data: ArrayBuffer
): Promise<FIT_File> =>
    new Promise((resolve, reject) => {
        const fitParser = new FitParser();
        fitParser.parse(data, function (error: string, data: FIT_File) {
            if (error) return reject(error);

            resolve(data);
        });
    });
