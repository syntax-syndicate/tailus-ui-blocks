import { ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { LinearGradient } from "./Area"
import { area, cartesianGrid } from "@tailus/themer";
import { Custom } from './Tooltip';

const data = [
    { name: 'Jan', Primary: 3000, Secondary: 4000, Accent: 5000, Gray: 6000, Neutral : 7000},
    { name: 'Feb', Primary: 3000, Secondary: 4000, Accent: 5000, Gray: 6000, Neutral : 7000},
    { name: 'Mar', Primary: 2000, Secondary: 3000, Accent: 4000, Gray: 5000, Neutral : 6000},
    { name: 'Apr', Primary: 2780, Secondary: 3780, Accent: 4780, Gray: 5780, Neutral : 6780},
    { name: 'May', Primary: 1890, Secondary: 2890, Accent: 3890, Gray: 4890, Neutral : 5890},
    { name: 'Jun', Primary: 2390, Secondary: 3390, Accent: 4390, Gray: 5390, Neutral : 6390},
    { name: 'Jul', Primary: 3490, Secondary: 4490, Accent: 5490, Gray: 6490, Neutral : 7490},
    { name: 'Aug', Primary: 3490, Secondary: 4490, Accent: 5490, Gray: 6490, Neutral : 7490},
    { name: 'Sep', Primary: 5490, Secondary: 6490, Accent: 7490, Gray: 8490, Neutral : 9490},
    { name: 'Oct', Primary: 3490, Secondary: 4490, Accent: 5490, Gray: 6490, Neutral : 7490},
    { name: 'Nov', Primary: 3000, Secondary: 4000, Accent: 5000, Gray: 6000, Neutral : 7000},
    { name: 'Dec', Primary: 3490, Secondary: 4490, Accent: 5490, Gray: 6490, Neutral : 7470},
];

export type Palette = "trust" | "romance" | "passion" | "energy" | "nature" | "mystery" | "oz" | "spring" | "winter";

export const AriaChartGradient = ({palette}:{palette:Palette}) => {
    return (
        <div className="h-56 pt-4 sm:pt-0 sm:h-72 w-full -ml-4 sm:max-w-2xl sm:min-w-[36rem] sm:-ml-6" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <LinearGradient intent="neutral" id={`${palette}Neutral`} />
                        <LinearGradient intent="gray" id={`${palette}Gray`} />
                        <LinearGradient intent="accent" id={`${palette}Accent`} />
                        <LinearGradient intent="secondary" id={`${palette}Secondary`} />
                        <LinearGradient intent="primary" id={`${palette}Primary`} />
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
                    <CartesianGrid className={cartesianGrid()} horizontal={false} stroke="currentColor" strokeDasharray={3} />
                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active fancy label={""}/>
                        }
                    />
                    
                    <Area className={area({ intent: "primary" })} stroke="currentColor" fill="currentColor" fillOpacity={0.1} dataKey="Primary" activeDot={{ color: "var(--area-primary-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "secondary" })} stroke="currentColor" fill="currentColor" fillOpacity={0.025} dataKey="Secondary" activeDot={{ color: "var(--area-secondary-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "accent" })} stroke="currentColor" fill="currentColor" fillOpacity={0.0125} dataKey="Accent" activeDot={{ color: "var(--area-accent-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "gray" })} stroke="currentColor" fill="currentColor" fillOpacity={0} dataKey="Gray" activeDot={{ color: "var(--area-gray-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "neutral" })} stroke="currentColor" fill="currentColor" fillOpacity={0} dataKey="Neutral" activeDot={{ color: "var(--area-neutral-stroke)", r: 3, stroke: "none" }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}