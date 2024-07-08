import { ResponsiveContainer, AreaChart, Area, Tooltip, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";
import { data } from "../data"
import Custom from "@components/examples/Tooltip";

export const TooltipMixedGlassy = () => {
    return (
        <div className="h-56 pt-4 sm:pt-0 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem]" data-palette="romance" data-shade="glassy">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active mixed label={""}/>
                        }
                    />
                    
                    <CartesianGrid
                        className={cartesianGrid()}
                        horizontal={false}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />

                    <Area className={area({ intent: "primary" })} stroke="currentColor" fill="currentColor" fillOpacity={0.1} dataKey="Primary" activeDot={{ color: "var(--area-primary-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "secondary" })} stroke="currentColor" fill="currentColor" fillOpacity={0.025} dataKey="Secondary" activeDot={{ color: "var(--area-secondary-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "accent" })} stroke="currentColor" fill="currentColor" fillOpacity={0.025} dataKey="Accent" activeDot={{ color: "var(--area-accent-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "gray" })} stroke="currentColor" fill="currentColor" fillOpacity={0.025} dataKey="Gray" activeDot={{ color: "var(--area-gray-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "neutral" })} stroke="currentColor" fill="currentColor" fillOpacity={0.025} dataKey="Neutral" activeDot={{ color: "var(--area-neutral-stroke)", r: 3, stroke: "none" }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export const mixedGlassyCode = [{
    code: `import { ResponsiveContainer, AreaChart, Area, Tooltip, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";
import { CustomTooltip } from "@tailus-ui/visualizations";

const data = [];

export const MyChart = () => {
    return (
        <div className="h-56 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem]" data-shade="glassy">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>

                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        content={
                            <CustomTooltip payload={[]} active mixed label={""}/>
                        }
                    />

                    <CartesianGrid
                        className={cartesianGrid()}
                        horizontal={false}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />
                    
                    // ...your Areas
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}`,
    lang : "tsx"
}]