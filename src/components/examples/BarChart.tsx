import { ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar,CartesianGrid } from 'recharts';
import { area } from "@tailus/themer";
import { Custom } from './Tooltip';
import type { Palette } from './AreaChart';

const barData = [
    { name: 'Mon', Primary: 3000, Secondary: 4000, Accent: 5000, Gray: 6000, Neutral : 7000},
    { name: 'Tue', Primary: 3000, Secondary: 4000, Accent: 5000, Gray: 6000, Neutral : 7000},
    { name: 'Wed', Primary: 2000, Secondary: 3000, Accent: 4000, Gray: 5000, Neutral : 6000},
    { name: 'Thu', Primary: 2780, Secondary: 3780, Accent: 4780, Gray: 5780, Neutral : 6780},
    { name: 'Fri', Primary: 1890, Secondary: 2890, Accent: 3890, Gray: 4890, Neutral : 5890},
    { name: 'Sat', Primary: 2390, Secondary: 3390, Accent: 4390, Gray: 5390, Neutral : 6390},
];

export const BarChartUI = ({palette}:{palette:Palette}) => {
    return (
        <div className="h-72 max-w-2xl min-w-[42rem]" data-shade="glassy">
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
                    <CartesianGrid horizontal />
                    <Tooltip
                        cursor={{ fill:"var(--ui-border-color)", opacity:0.5, strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active mixed label={""}/>
                        }
                    />
                    <Bar className={area({ gradient:true, intent: "primary" })} fill="currentColor" dataKey="Primary" />
                    <Bar className={area({ gradient:true, intent: "secondary" })} fill="currentColor" dataKey="Secondary" />
                    <Bar className={area({ gradient:true, intent: "accent" })} fill="currentColor" dataKey="Accent" />
                    <Bar className={area({ gradient:true, intent: "gray" })} fill="currentColor" dataKey="Gray" />
                    <Bar className={area({ gradient:true, intent: "neutral" })} fill="currentColor" dataKey="Neutral" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}