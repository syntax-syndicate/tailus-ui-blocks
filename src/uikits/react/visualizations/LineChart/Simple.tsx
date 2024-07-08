import { ResponsiveContainer, LineChart, Tooltip, YAxis, XAxis, Line, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";
import { data } from "./../data"
import Custom from "@components/examples/Tooltip";

export const SimpleLineChart = () => {
    return (
        <div className="h-56 sm:h-72 sm:max-w-xl w-full sm:-ml-6 -ml-4" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <defs>
                        <linearGradient className='text-white dark:text-gray-900' id="dotFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="currentColor" stopOpacity={1} />
                            <stop offset="95%" stopColor="currentColor" stopOpacity={1} />
                        </linearGradient>
                    </defs>
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

                    <Line
                        className={area({intent: "secondary" })}
                        fill="url(#dotFill)"
                        stroke="currentColor"
                        dataKey="Primary"
                        activeDot={
                            {
                                color: "var(--area-secondary-stroke)",
                                r: 3,
                                stroke: "currentColor"
                            }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export const simpleLineChartCode = [{
    code: `import { ResponsiveContainer, LineChart, Tooltip, YAxis, XAxis, Line, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";
import { CustomTooltip } from "@tailus-ui/visualizations";

const data = [];

export const MyChart = () => {
    return (
        <div className="h-56 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient className='text-white dark:text-gray-900' id="dotFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="currentColor" stopOpacity={1} />
                            <stop offset="95%" stopColor="currentColor" stopOpacity={1} />
                        </linearGradient>
                    </defs>
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

                    <Line
                        className={area({intent: "secondary" })}
                        fill="url(#dotFill)"
                        stroke="currentColor"
                        dataKey="Primary"
                        activeDot={
                            {
                                color: "var(--area-secondary-stroke)",
                                r: 3,
                                stroke: "currentColor"
                            }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}`,
    lang : "tsx"
}]