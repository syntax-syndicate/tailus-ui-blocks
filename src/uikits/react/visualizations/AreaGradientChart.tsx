import { ResponsiveContainer, AreaChart, Area, Tooltip, CartesianGrid } from 'recharts';
import { data } from "./data"
import { area, cartesianGrid } from "@tailus/themer";
import Custom from "@components/examples/Tooltip";
import { LinearGradient } from "@components/examples/LinearGradient";

export const AreaGradientChart = () => {
    return (
        <div className="h-72 max-w-xl w-full" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <LinearGradient intent="secondary" id="Secondary" />
                    </defs>
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

                    <Area className={area({ intent: "secondary" })} stroke="currentColor" fill="url(#Secondary)" dataKey="Primary" activeDot={{ color: "var(--area-secondary-stroke)", r: 3, stroke: "white" }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

const code = `import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';
import { CustomTooltip, LinearGradient } from "@tailus-ui/visualizations";
import { area, cartesianGrid } from "@tailus/themer";

const data = [];

export const MyChart = () => {
    return (
        <div className="h-72 w-full sm:max-w-2xl sm:min-w-[36rem]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <LinearGradient intent="secondary" id="Secondary" />
                    </defs>

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
                    
                    <Area
                        className={area({ intent: "secondary" })
                        stroke="currentColor"
                        fill="url(#Secondary)"
                        dataKey="Primary"
                        activeDot={
                            {
                                color: "var(--area-secondary-stroke)",
                                r: 3,
                                stroke: "white"
                            }
                        }
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}`

export const areaGradientCode = [{
    code,
    lang : "tsx"
}]