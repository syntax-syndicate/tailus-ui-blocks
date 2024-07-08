import { ResponsiveContainer, AreaChart, Area, Tooltip, CartesianGrid } from 'recharts';
import { data } from "./../data"
import Custom from "@components/examples/Tooltip";
import { cartesianGrid } from '@tailus/themer';

export const TooltipOverview = () => {
    return (
        <div className="h-56 pt-4 sm:pt-0 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem]" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    
                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active label={""}/>
                        }
                    />
                    <CartesianGrid
                        className={cartesianGrid()}
                        horizontal={false}
                        stroke="currentColor"
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