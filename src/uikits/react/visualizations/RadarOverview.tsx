import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { radarData } from "./data"
import { area } from "@tailus/themer";

export const RadarChartOverview = () => {
    return (
        <div className="h-72 max-w-xl w-full text-[--ui-border-color]" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="currentColor"/>
                    <PolarAngleAxis
                        fontSize={12}
                        dataKey="subject"
                        className="text-[--caption-text-color]"
                    />
                    <PolarRadiusAxis
                        fontSize={12}
                        axisLine={false}
                        tickLine={false}
                        domain={[0, 150]}
                        className="text-[--body-text-color]"
                        stroke='currentColor'
                    />
                    <Radar className={area({ intent: "secondary" })} fill="currentColor" stroke="currentColor" name="Mike" dataKey="A" />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}