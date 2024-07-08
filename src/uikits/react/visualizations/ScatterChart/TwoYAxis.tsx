import { ResponsiveContainer, ScatterChart, Scatter, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";
import Custom from "@components/examples/Tooltip";

const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
const data02 = [
  { x: 300, y: 300, z: 200 },
  { x: 400, y: 500, z: 260 },
  { x: 200, y: 700, z: 400 },
  { x: 340, y: 350, z: 280 },
  { x: 560, y: 500, z: 500 },
  { x: 230, y: 780, z: 200 },
  { x: 500, y: 400, z: 200 },
  { x: 300, y: 500, z: 260 },
  { x: 240, y: 300, z: 400 },
  { x: 320, y: 550, z: 280 },
  { x: 500, y: 400, z: 500 },
  { x: 420, y: 280, z: 200 },
];

export const TwoYAxisScatterChart = () => {
    return (
        <div className="h-72 max-w-xl w-full" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart>

                    <XAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        type="number"
                        dataKey="x"
                        name="stature"
                        unit="cm"
                        stroke="currentColor"
                    />

                    <YAxis
                        className={area({ intent: "gray" })}
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        yAxisId="left"
                        type="number"
                        dataKey="y"
                        name="weight"
                        unit="kg"
                        stroke="currentColor"
                    />

                    <YAxis
                        className={area({intent: "secondary" })}
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        yAxisId="right"
                        type="number"
                        dataKey="y"
                        name="weight"
                        unit="kg"
                        orientation="right"
                        stroke="currentColor"
                    />

                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active fancy label={""}/>
                        }
                    />

                    <CartesianGrid
                        className={cartesianGrid()}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />

                    <Scatter
                        className={area({ gradient: true, intent: "gray", class:"dark:text-gray-400" })}
                        fill="currentColor"
                        yAxisId="left"
                        name="A school"
                        data={data01}
                    />

                    <Scatter
                        className={area({ gradient: true, intent: "secondary" })}
                        fill="currentColor"
                        yAxisId="right"
                        name="B school"
                        data={data02}
                    />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export const twoYAxisScatterChartCode = [{
    code: `import { CustomTooltip } from "@tailus-ui/visualizations";
import { ResponsiveContainer, ScatterChart, Scatter, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";

const data01 = [];
const data02 = [];

export const ScatterOverview = () => {
    return (
        <div className="h-72 max-w-xl w-full" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart>

                    <XAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        type="number"
                        dataKey="x"
                        name="stature"
                        unit="cm"
                        stroke="currentColor"
                    />

                    <YAxis
                        className={area({ intent: "gray" })}
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        yAxisId="left"
                        type="number"
                        dataKey="y"
                        name="weight"
                        unit="kg"
                        stroke="currentColor"
                    />

                    <YAxis
                        className={area({intent: "secondary" })}
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        yAxisId="right"
                        type="number"
                        dataKey="y"
                        name="weight"
                        unit="kg"
                        orientation="right"
                        stroke="currentColor"
                    />

                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        content={
                            <CustomTooltip payload={[]} active fancy label={""}/>
                        }
                    />

                    <CartesianGrid
                        className={cartesianGrid()}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />

                    <Scatter
                        className={area({ gradient: true, intent: "gray", class:"dark:text-gray-400" })}
                        fill="currentColor"
                        yAxisId="left"
                        name="A school"
                        data={data01}
                    />

                    <Scatter
                        className={area({ gradient: true, intent: "secondary" })}
                        fill="currentColor"
                        yAxisId="right"
                        name="B school"
                        data={data02}
                    />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}`,
    lang : "tsx"
}]