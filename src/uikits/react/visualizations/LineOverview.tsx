import { ResponsiveContainer, LineChart, Line, Tooltip, CartesianGrid } from 'recharts';
import { data } from "./data"
import { area, cartesianGrid } from "@tailus/themer";
import Custom from "@components/examples/Tooltip";

export const LineOverview = () => {
    return (
        <div className="h-56 pt-4 sm:pt-0 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem]" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>

                    <defs>
                        <linearGradient className='text-white dark:text-gray-900' id="dotFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="currentColor" stopOpacity={1} />
                            <stop offset="95%" stopColor="currentColor" stopOpacity={1} />
                        </linearGradient>
                    </defs>

                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active fancy label={""}/>
                        }
                    />
                    
                    <CartesianGrid
                        className={cartesianGrid()}
                        stroke="currentColor"
                        strokeDasharray={3}
                        horizontal={false}
                    />

                    <Line type="monotone" className={area({ intent: "secondary" })} stroke="currentColor" fill="url(#dotFill)" dataKey="Primary" activeDot={{r:4, color:"var(--area-primary-stroke)", stroke:"currentColor"}} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}