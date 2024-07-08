import { ResponsiveContainer, Bar, BarChart, YAxis, XAxis, LabelList } from 'recharts';
import { area } from "@tailus/themer";
import { Caption, Text, Title } from '@components/typography';

export const barData = [
    { name: 'Direct', data: 9000},
    { name: 'Organic Search', data : 5000},
    { name: 'Referral', data:4000},
    { name: 'Organic Social', data:3000},
    { name: 'Organic Video', data:2000},
];

export const Traffic = () => {
    return (
        <div className="space-y-6 sm:max-w-lg w-full">
            <div>
                <Title as='div' size="lg" weight="medium">Website Traffic</Title>
                <Text size="sm" className='mt-1 mb-0'>New users by First user primary channel group (Default Channel Group)</Text>
            </div>

            <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={barData}
                    >
                        <XAxis hide type="number"/>
                        <YAxis hide type="category" dataKey="name"/>
                        <Bar
                            className={area({ gradient: true, intent: "primary" })}
                            radius={4}
                            fill="currentColor"
                            dataKey="data"
                        >
                            <LabelList className="text-white" fontSize={12} position="insideLeft" fill="currentColor" stroke="none" dataKey="name" />
                            <LabelList className="text-[--body-text-color]" fontSize={12} position="right" fill="currentColor" stroke="none" dataKey="data" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <Caption size="xs">
                * Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, neque, laudantium numquam esse totam quis iusto in nobis aspernatur ducimus fugit iure adipisci laboriosam, fugiat magni nemo consequatur atque vel?
            </Caption>
        </div>
    )
}

export const trafficCode = [{
    code: `import { ResponsiveContainer, BarChart, Bar, YAxis, XAxis } from 'recharts';
import { area } from "@tailus/themer";
import { Caption, Text, Title } from '@tailus-ui/typography';

const data = [];

export const MyChart = () => {
    return (
        <div className="space-y-6 sm:max-w-lg w-full">
            <div>
                <Title as='h4' size="base" weight="medium">Website Traffic</Title>
                <Text size="sm" className='mt-1 mb-0'>New users by First user primary channel group (Default Channel Group)</Text>
            </div>

            <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={barData}
                    >
                        <XAxis hide type="number"/>
                        <YAxis hide type="category" dataKey="name"/>
                        <Bar
                            className={area({ gradient: true, intent: "primary" })}
                            radius={4}
                            fill="currentColor"
                            dataKey="data"
                        >
                            <LabelList className="text-white" fontSize={12} position="insideLeft" fill="currentColor" stroke="none" dataKey="name" />
                            <LabelList className="text-[--body-text-color]" fontSize={12} position="right" fill="currentColor" stroke="none" dataKey="data" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <Caption size="xs">
                * Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, neque, laudantium numquam esse totam quis iusto in nobis aspernatur ducimus fugit iure adipisci laboriosam, fugiat magni nemo consequatur atque vel?
            </Caption>
        </div>
    )
}`,
    lang : "tsx"
}]