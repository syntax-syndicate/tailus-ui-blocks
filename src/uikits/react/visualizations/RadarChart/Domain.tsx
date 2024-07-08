import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { radarData } from "./../data"
import { area } from "@tailus/themer";

export const DomainRadarChart = () => {
    return (
        <div className="h-72 max-w-xl w-full text-[--ui-border-color]" data-palette="oz" data-shade="900">
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
                        tickLine={false}
                        angle={30}
                        domain={[0, 150]}
                        className="text-[--body-text-color]"
                        stroke='currentColor'
                    />
                    <Radar className={area({ intent: "secondary" })} fill="currentColor" stroke="currentColor" name="Mike" dataKey="A" />
                    <Radar className={area({ intent: "primary" })} fill="currentColor" stroke="currentColor" name="Lily" dataKey="B" />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}


export const domainRadarChartCode = [{
    code: `import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { area } from "@tailus/themer";

const data = [];

export const MyChart = () => {
    return (
        <div className="h-72 max-w-xl w-full text-[--ui-border-color]">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
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
                        angle={30}
                        domain={[0, 150]}
                        stroke='currentColor'
                    />
                    <Radar className={area({ intent: "secondary" })} fill="currentColor" stroke="currentColor" name="Mike" dataKey="A" />
                    <Radar className={area({ intent: "primary" })} fill="currentColor" stroke="currentColor" name="Lily" dataKey="B" />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}`,
    lang : "tsx"
}]