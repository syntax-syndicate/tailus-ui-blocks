import { ResponsiveContainer, AreaChart, Area, Tooltip, YAxis, XAxis, CartesianGrid } from 'recharts';
import { data } from "../data"
import { area, cartesianGrid } from "@tailus/themer";
import Custom from "@components/examples/Tooltip";
import { LinearGradient } from "@components/examples/LinearGradient";

export const GradientAreaChart = () => {
    return (
        <div className="h-56 sm:h-72 sm:max-w-xl w-full sm:-ml-6 -ml-4">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <LinearGradient id="Gray" intent="gray" />
                        <LinearGradient id="Primary" intent="primary" />
                        <LinearGradient id="Accent" intent="accent" />
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
                    
                    <Area
                        className={area({intent: "gray" })}
                        fill="url(#Gray)"
                        stroke="currentColor"
                        dataKey="Accent"
                        activeDot={
                            {
                                color: "var(--area-gray-stroke)",
                                r: 3,
                                stroke: "white",
                                strokeWidth:1
                            }
                        }
                    />
                    <Area
                        className={area({intent: "primary" })}
                        fill="url(#Primary)"
                        stroke="currentColor"
                        dataKey="Secondary"
                        activeDot={
                            {
                                color: "var(--area-primary-stroke)",
                                r: 3,
                                stroke: "white",
                                strokeWidth:1
                            }
                        }
                    />
                    <Area
                        className={area({intent: "accent" })}
                        fill="url(#Accent)"
                        stroke="currentColor"
                        dataKey="Primary"
                        activeDot={
                            {
                                color: "var(--area-accent-stroke)",
                                r: 3,
                                stroke: "white",
                                strokeWidth:1
                            }
                        }
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export const gradientAreaChartCode = [{
    code: `import { CustomTooltip, LinearGradient } from "@tailus-ui/visualizations";
import { ResponsiveContainer, AreaChart, Area, Tooltip, YAxis, XAxis } from 'recharts';
import { area } from "@tailus/themer";

const data = [];

export const MyChart = () => {
    return (
        <div className="h-56 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <LinearGradient id="Gray" intent="gray" />
                        <LinearGradient id="Primary" intent="primary" />
                        <LinearGradient id="Accent" intent="accent" />
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
                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        content={
                            <CustomTooltip payload={[]} active fancy label={""}/>
                        }
                    />
                    <CartesianGrid horizontal={false} />

                    <Area
                        className={area({intent: "gray" })}
                        fill="url(#Gray)"
                        stroke="currentColor"
                        dataKey="Accent"
                        activeDot={
                            {
                                color: "var(--area-gray-stroke)",
                                r: 3,
                                stroke: "white",
                                strokeWidth:1
                            }
                        }
                    />
                    <Area
                        className={area({intent: "primary" })}
                        fill="url(#Primary)"
                        stroke="currentColor"
                        dataKey="Secondary"
                        activeDot={
                            {
                                color: "var(--area-primary-stroke)",
                                r: 3,
                                stroke: "white",
                                strokeWidth:1
                            }
                        }
                    />
                    <Area
                        className={area({intent: "accent" })}
                        fill="url(#Accent)"
                        stroke="currentColor"
                        dataKey="Primary"
                        activeDot={
                            {
                                color: "var(--area-accent-stroke)",
                                r: 3,
                                stroke: "white",
                                strokeWidth:1
                            }
                        }
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}`,
    lang : "tsx"
}]