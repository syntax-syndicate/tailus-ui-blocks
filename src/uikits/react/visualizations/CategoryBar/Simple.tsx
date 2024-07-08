import { ResponsiveContainer, Bar, BarChart, YAxis, XAxis} from 'recharts';
import { area } from "@tailus/themer";
import { categoryBarData } from '../data';

export const CategoryBar = () => {
    return (
        <div className="h-20 sm:max-w-xl w-full -ml-7 -mb-6">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={categoryBarData}
                >
                    <YAxis
                        className="hidden text-[--caption-text-color]"
                        fontSize={12}
                        axisLine={false}
                        type="category"
                        scale="band"
                        dataKey="name"
                    />
                    <XAxis
                        className="hidden text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        type="number"
                    />

                    <Bar
                        className={area({ gradient: true, intent: "primary" })}
                        radius={[16, 0, 0, 16]}
                        fill="currentColor"
                        dataKey="Primary"
                        barSize={12}
                        stackId="category"
                        style={{ transform:"translateX(-5px)"}}
                    />
                    <Bar
                        className={area({ gradient: true, intent: "secondary" })}
                        fill="currentColor"
                        dataKey="Secondary"
                        stackId="category"
                        style={{ transform:"translateX(-4px)"}}
                    />
                    <Bar
                        className={area({ gradient: true, intent: "accent" })}
                        fill="currentColor"
                        dataKey="Accent"
                        stackId="category"
                        style={{ transform:"translateX(-3px)"}}
                    />
                    <Bar
                        className={area({ gradient: true, intent: "gray" })}
                        fill="currentColor"
                        dataKey="Gray"
                        stackId="category"
                        style={{ transform:"translateX(-2px)"}}
                    />
                    <Bar
                        className={area({ gradient: true, intent: "neutral" })}
                        radius={[0, 16, 16, 0]}
                        fill="currentColor"
                        dataKey="Neutral"
                        stackId="category"
                        style={{ transform:"translateX(-1px)"}}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export const categoryBarCode = [{
    code: `import { ResponsiveContainer, BarChart, Bar, YAxis, XAxis } from 'recharts';
import { area } from "@tailus/themer";

const data = [];

export const MyChart = () => {
    return (
        <div className="h-20 sm:max-w-xl w-full sm:-ml-6 -ml-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={data}
                >
                    <YAxis
                        className="hidden text-[--caption-text-color]"
                        fontSize={12}
                        axisLine={false}
                        type="category"
                        scale="band"
                        dataKey="name"
                    />
                    <XAxis
                        className="hidden text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        type="number"
                    />

                    <Bar
                        className={area({ gradient: true, intent: "primary" })}
                        radius={[16, 0, 0, 16]}
                        fill="currentColor"
                        dataKey="Primary"
                        barSize={12}
                        stackId="category"
                        style={{ transform:"translateX(-5px)"}}
                    />
                    <Bar
                        className={area({ gradient: true, intent: "secondary" })}
                        fill="currentColor"
                        dataKey="Secondary"
                        stackId="category"
                        style={{ transform:"translateX(-4px)"}}
                    />
                    <Bar
                        className={area({ gradient: true, intent: "accent" })}
                        fill="currentColor"
                        dataKey="Accent"
                        stackId="category"
                        style={{ transform:"translateX(-3px)"}}
                    />
                    <Bar
                        className={area({ gradient: true, intent: "gray" })}
                        fill="currentColor"
                        dataKey="Gray"
                        stackId="category"
                        style={{ transform:"translateX(-2px)"}}
                    />
                    <Bar
                        className={area({ gradient: true, intent: "neutral" })}
                        radius={[0, 16, 16, 0]}
                        fill="currentColor"
                        dataKey="Neutral"
                        stackId="category"
                        style={{ transform:"translateX(-1px)"}}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}`,
    lang : "tsx"
}]