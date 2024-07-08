import { ResponsiveContainer, AreaChart, Area, Tooltip, YAxis, XAxis, CartesianGrid } from 'recharts';
import { data } from "@tailus-ui/visualizations/data"
import { area, cartesianGrid } from "@tailus/themer";
import Custom from "@components/examples/Tooltip";
import { LinearGradient } from "@components/examples/LinearGradient";
import Card from '@react-ui/card/Card';
import { Text, Title } from '@components/typography';

export const AreaData = () => {
    return (
        <Card className='space-y-6'>
            <div>
                <Title as="h2" size="lg" weight="medium" className="mb-1">New Orders</Title>
                <Text className="mt-1 mb-0" size="sm">Visualize your main activities data</Text>
            </div>
            <div className="h-56 sm:h-72 w-full">
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
                            className={area({intent: "accent" })}
                            fill="url(#Accent)"
                            type="monotone"
                            stroke="currentColor"
                            dataKey="Gray"
                            activeDot={
                                {
                                    color: "var(--area-accent-stroke)",
                                    r: 3,
                                    stroke: "white",
                                    strokeWidth:1
                                }
                            }
                        />
                        <Area
                            className={area({intent: "primary" })}
                            fill="url(#Primary)"
                            type="monotone"
                            stroke="currentColor"
                            dataKey="Primary"
                            activeDot={
                                {
                                    color: "var(--area-primary-stroke)",
                                    r: 3,
                                    stroke: "white",
                                    strokeWidth:1
                                }
                            }
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}