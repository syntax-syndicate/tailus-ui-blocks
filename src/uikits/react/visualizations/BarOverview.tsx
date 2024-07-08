import { ResponsiveContainer, BarChart, Bar, YAxis, XAxis, CartesianGrid } from 'recharts';
import { barData } from "./data"
import { area, cartesianGrid } from "@tailus/themer";

export const BarChartOverview = () => {
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
                        stroke="currentColor"
                        strokeDasharray={3}
                        vertical={false}
                    />

                    <Bar className={area({ gradient:true, intent: "secondary" })} radius={[4,4,0,0]} fill="currentColor" dataKey="Primary" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}