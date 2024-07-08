import { ResponsiveContainer, AreaChart, Area, Tooltip, YAxis, XAxis, CartesianGrid } from 'recharts';
import { data } from "./../data"
import { area, cartesianGrid } from "@tailus/themer";
import Custom from "@components/examples/Tooltip";

export const SimpleAreaChart = () => {
    return (
        <div className="h-56 sm:h-72 sm:max-w-xl w-full sm:-ml-6 -ml-4" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <YAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <XAxis
                        className="text-[--caption-text-color]"
                        dataKey="name"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active fancy label={""}/>
                        }
                    />
                    <CartesianGrid
                        className={cartesianGrid()}
                        horizontal={false}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />

                    <Area
                        className={area({intent: "secondary" })}
                        fill="currentColor"
                        stroke="currentColor"
                        fillOpacity={0.1}
                        dataKey="Primary"
                        activeDot={
                            {
                                color: "var(--area-secondary-stroke)",
                                r: 3,
                                stroke: "white"
                            }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export const simpleAreaChartCode = [{
    code: `import { CustomTooltip } from "@tailus-ui/visualizations";
import { ResponsiveContainer, AreaChart, Area, Tooltip, YAxis, XAxis, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";

const data = [];

export const MyChart = () => {
    return (
        <div className="h-56 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                
                    <YAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />

                    <XAxis
                        className="text-[--caption-text-color]"
                        dataKey="name"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />

                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        content={
                            <CustomTooltip payload={[]} active fancy label={""}/>
                        }
                    />
                    
                    <CartesianGrid
                        className={cartesianGrid()}
                        horizontal={false}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />

                    <Area
                        className={area({intent: "secondary" })}
                        fill="currentColor"
                        stroke="currentColor"
                        fillOpacity={0.1}
                        dataKey="Primary"
                        activeDot={
                            {
                                color: "var(--area-secondary-stroke)",
                                r: 3,
                                stroke: "white"
                            }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}`,
    lang : "tsx"
}]