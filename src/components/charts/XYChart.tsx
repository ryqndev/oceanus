import React from "react";
import { LinePath } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleLinear, scaleTime } from "@visx/scale";
import { GridRows, GridColumns } from "@visx/grid";
import { Group } from "@visx/group";
import { curveMonotoneX, curveMonotoneY } from "@visx/curve";
interface DataPoint {
    x: Date; // Y-axis value as Date or timestamp
    y: number; // X-axis value (numeric)
}

interface LineChartProps {
    width: number;
    height: number;
    data: DataPoint[];
}

export const XYChart: React.FC<LineChartProps> = ({ width, height, data }) => {
    // Define margins
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Scales
    const yScale = scaleLinear<number>({
        domain: [
            Math.min(...data.map((d) => d.y)),
            Math.max(...data.map((d) => d.y)),
        ],
        range: [0, innerHeight],
    });

    const xScale = scaleTime({
        domain: [
            new Date(Math.min(...data.map((d) => d.x.getTime()))),
            new Date(Math.max(...data.map((d) => d.x.getTime()))),
        ],
        range: [0, innerWidth],
    });

    return (
        <svg width={width} height={height}>
            <Group left={margin.left} top={margin.top}>
                {/* Grid */}
                <GridRows
                    scale={yScale}
                    width={innerWidth}
                    height={innerHeight}
                    stroke="#e0e0e0"
                />
                <GridColumns
                    scale={xScale}
                    width={innerWidth}
                    height={innerHeight}
                    stroke="#e0e0e0"
                />

                {/* Line Path */}
                <LinePath
                    data={data}
                    x={(d) => xScale(d.x)}
                    y={(d) => yScale(d.y)}
                    stroke="#007bff"
                    strokeWidth={2}
                    curve={curveMonotoneY}
                />

                {/* Axes */}
                <AxisBottom
                    scale={xScale}
                    top={innerHeight}
                    stroke="#333"
                    tickStroke="#333"
                    tickFormat={(value) =>
                        value instanceof Date ? value.toLocaleTimeString() : ""
                    } // Format timestamp
                    tickLabelProps={() => ({
                        fill: "#333",
                        fontSize: 10,
                        textAnchor: "end",
                    })}
                />
                <AxisLeft
                    tickLabelProps={() => ({
                        fill: "#333",
                        fontSize: 10,
                        textAnchor: "middle",
                    })}
                    scale={yScale}
                    stroke="#333"
                    tickStroke="#333"
                />
            </Group>
        </svg>
    );
};
