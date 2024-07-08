import { ResponsiveContainer, BarChart, Bar, YAxis, XAxis, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";
import { barData } from "./../data"

export const StackedBarChart = () => {
    return (
        <div className="h-56 sm:h-72 sm:max-w-xl w-full sm:-ml-6 -ml-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
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
                    
                    <CartesianGrid
                        className={cartesianGrid()}
                        vertical={false}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />

                    <Bar
                        className={area({ gradient: true, intent: "primary" })}
                        fill="currentColor"
                        stackId="a"
                        barSize={20}
                        dataKey="Primary"
                    />
                    <Bar
                        className={area({ gradient: true, intent: "accent" })}
                        radius={[4, 4, 0, 0]}
                        fill="currentColor"
                        stackId="a"
                        dataKey="Accent"
                        barSize={20}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export const stackedBarChartCode = [{
    code: `import { ResponsiveContainer, BarChart, Bar, YAxis, XAxis, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";

const data = [];

export const MyChart = () => {
    return (
        <div className="h-56 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
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
                    
                    <CartesianGrid
                        className={cartesianGrid()}
                        vertical={false}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />

                    <Bar
                        className={area({ gradient: true, intent: "primary" })}
                        fill="currentColor"
                        stackId="a"
                        barSize={20}
                        dataKey="Primary"
                    />
                    <Bar
                        className={area({ gradient: true, intent: "accent" })}
                        radius={[4, 4, 0, 0]}
                        fill="currentColor"
                        stackId="a"
                        dataKey="Accent"
                        barSize={20}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}`,
    lang : "tsx"
}]