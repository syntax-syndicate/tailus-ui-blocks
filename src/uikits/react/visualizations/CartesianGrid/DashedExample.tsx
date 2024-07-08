import { ResponsiveContainer, AreaChart, Area, CartesianGrid } from 'recharts';
import { data } from "../data"
import { cartesianGrid } from "@tailus/themer";

export const CartesianGridDashed = () => {
    return (
        <div className="h-56 pt-4 sm:pt-0 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem]" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <CartesianGrid
                        className={cartesianGrid()}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />
                    
                    <Area className="hidden" stroke="currentColor" fill="currentColor" fillOpacity={0.05} dataKey="Primary" activeDot={{ color: "var(--area-primary-stroke)", r: 3, stroke: "none" }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export const dashedCode = [{
    code: `import { cartesianGrid } from "@tailus/themer";
import { ResponsiveContainer, AreaChart, Area, CartesianGrid } from 'recharts';

const data = [];

export const CartesianGridDashed = () => {
    return (
        <div className="h-56 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>

                    <CartesianGrid
                        className={cartesianGrid()}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />
                    
                    // ...your Area
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}`,
    lang : "tsx"
}]