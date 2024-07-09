import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
    {
        name: 'Primary',
        uv: 31.47,
        pv: 2400,
        fill: 'var(--dv-primary)'
    },
    {
        name: 'Secondary',
        uv: 26.69,
        pv: 4567,
        fill: 'var(--dv-secondary)'
    },
    {
        name: 'Accent',
        uv: 15.69,
        pv: 1398,
        fill: 'var(--dv-accent)'
    },
    {
        name: 'Success',
        uv: 8.22,
        pv: 9800,
        fill: 'var(--dv-success)'
    },
    {
        name: 'Info',
        uv: 8.63,
        pv: 3908,
        fill: 'var(--dv-info)'
    },
    {
        name: 'Warning',
        uv: 2.63,
        pv: 4800,
        fill: 'var(--dv-warning)'
    },
    {
        name: 'Danger',
        uv: 6.67,
        pv: 4800,
        fill: 'var(--dv-danger)'
    }
];

export const legendText = (value: string) => {
    return <span className="ml-1 mr-3 text-sm font-medium text-[--body-text-color]">{value}</span>;
};

export const CategoryBar = () => {
    return (
        <div className="mx-auto w-[26rem] [--placeholder-text-color:theme(colors.gray.950/0.1)] dark:[--placeholder-text-color:theme(colors.white/0.1)]">
            <ResponsiveContainer aspect={1 / 1}>
                <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={14} data={data}>
                    <RadialBar label={{ position: 'insideStart', dataKey: 'name', fontSize: 11, fill: '#fff' }} minAngle={15} background={{ fill: 'var(--ui-border-color)' }} clockWise cornerRadius={10} dataKey="uv" />
                    <Legend wrapperStyle={{ transform: 'translate(75%, 0)' }} align="right" verticalAlign="middle" layout="radial" iconSize={10} iconType="circle" formatter={legendText} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};
