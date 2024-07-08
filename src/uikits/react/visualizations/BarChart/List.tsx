import { ResponsiveContainer, Bar, BarChart, YAxis, XAxis, CartesianGrid } from 'recharts';
import { barData } from "../data"
import { area, cartesianGrid } from "@tailus/themer";

export const ListBarChart = () => {
    return (
        <div className="h-96 sm:max-w-xl w-full sm:-ml-6 -ml-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={barData}
                >
                    <YAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        type="category"
                        dataKey="name"
                    />
                    <XAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        type="number"
                    />
                    <CartesianGrid
                        className={cartesianGrid()}
                        horizontal={false}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />

                    <Bar
                        className={area({ gradient: true, intent: "secondary" })}
                        radius={4}
                        fill="currentColor"
                        dataKey="Primary"
                        barSize={20}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export const listBarChartCode = [{
    code: `import { ResponsiveContainer, BarChart, Bar, YAxis, XAxis, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";

const data = [];

export const MyChart = () => {
    return (
        <div className="h-96 sm:max-w-xl w-full sm:-ml-6 -ml-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={data}
                >
                    <YAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        axisLine={false}
                        type="category"
                        scale="band"
                        dataKey="name"
                    />
                    <XAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        type="number"
                    />
                    
                    <CartesianGrid
                        className={cartesianGrid()}
                        horizontal={false}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />

                    <Bar
                        className={area({ gradient: true, intent: "secondary" })}
                        radius={[0, 4, 4, 0]}
                        fill="currentColor"
                        dataKey="Primary"
                        barSize={20}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}`,
    lang : "tsx"
}]