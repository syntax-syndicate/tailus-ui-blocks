import { ResponsiveContainer, AreaChart, Area, YAxis, XAxis, CartesianGrid } from 'recharts';
import { data } from "./data"
import { cartesianGrid } from "@tailus/themer";

export const AxisOverview = () => {
    return (
        <div className="h-56 pt-4 sm:pt-0 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem] sm:-ml-6 -ml-4" data-shade="900">
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
                    
                    <CartesianGrid
                        className={cartesianGrid()}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />

                    <Area className="hidden" stroke="currentColor" fill="currentColor" fillOpacity={0.05} dataKey="Primary" activeDot={{ color: "var(--area-primary-stroke)", r: 3, stroke: "none" }} />
                    <Area className="hidden" stroke="currentColor" fill="currentColor" fillOpacity={0.05} dataKey="Secondary" activeDot={{ color: "var(--area-secondary-stroke)", r: 3, stroke: "none" }} />
                    <Area className="hidden" stroke="currentColor" fill="currentColor" fillOpacity={0.05} dataKey="Accent" activeDot={{ color: "var(--area-accent-stroke)", r: 3, stroke: "none" }} />
                    <Area className="hidden" stroke="currentColor" fill="currentColor" fillOpacity={0.025} dataKey="Gray" activeDot={{ color: "var(--area-gray-stroke)", r: 3, stroke: "none" }} />
                    <Area className="hidden" stroke="currentColor" fill="currentColor" fillOpacity={0.025} dataKey="Neutral" activeDot={{ color: "var(--area-neutral-stroke)", r: 3, stroke: "none" }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}