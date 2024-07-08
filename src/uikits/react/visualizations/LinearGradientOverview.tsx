import { ResponsiveContainer, AreaChart, Area, CartesianGrid } from 'recharts';
import { data } from "./data"
import { area, cartesianGrid } from "@tailus/themer";
import { LinearGradient } from "@components/examples/LinearGradient";

export const LinearGradientOverview = () => {
    return (
        <div className="h-56 pt-4 sm:pt-0 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem]" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <LinearGradient intent="gray" id="Gray" />
                        <LinearGradient intent="accent" id="Accent" />
                        <LinearGradient intent="primary" id="Primary" />
                    </defs>
                    
                    <CartesianGrid
                        className={cartesianGrid()}
                        stroke="currentColor"
                        strokeDasharray={3}
                        horizontal={false}
                    />

                    <Area className={area({ intent: "neutral" })} stroke="currentColor" fill="url(#Gray)" dataKey="Gray" activeDot={{ color: "var(--area-accent-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "gray" })} stroke="currentColor" fill="url(#Gray)" dataKey="Accent" activeDot={{ color: "var(--area-accent-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "accent" })} stroke="currentColor" fill="url(#Accent)" dataKey="Secondary" activeDot={{ color: "var(--area-accent-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "primary" })} stroke="currentColor" fill="url(#Primary)" dataKey="Primary" activeDot={{ color: "var(--area-primary-stroke)", r: 3, stroke: "none" }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}