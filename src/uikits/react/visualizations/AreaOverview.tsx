import { ResponsiveContainer, AreaChart, Area, Tooltip, CartesianGrid } from 'recharts';
import { data } from "./data"
import { area, cartesianGrid } from "@tailus/themer";
import Custom from "@components/examples/Tooltip";

export const AreaChartOverview = () => {
    return (
        <div className="h-72 max-w-xl w-full" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
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

                    <Area className={area({ intent: "secondary" })} stroke="currentColor" fill="currentColor" fillOpacity={0.05} dataKey="Primary" activeDot={{ color: "var(--area-secondary-stroke)", r: 3, stroke: "none" }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}