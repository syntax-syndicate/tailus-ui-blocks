import { Card } from "@components/Card"
import { Caption, Text, Title } from "@components/typography"
import { TrendingDown, TrendingUp } from "lucide-react"
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import { data } from "@react-ui/visualizations/data"
import { area } from "@tailus/themer";
import { Badge } from "@react-ui/badge/Badge";
import { LinearGradient } from "./LinearGradient";

export const OverviewCards = () => (
    <div className="grid sm:grid-cols-2 gap-3 max-w-xl w-full">
        <Card variant="mixed">
            <Caption as="span">New Orders</Caption>
            <Title className="mt-2" as="span">326. 708</Title>

            <div className="mt-6 flex gap-3 items-center">
                <div className="flex items-center gap-1.5 [--body-text-color:theme(colors.success.600)] dark:[--body-text-color:theme(colors.success.400)]">
                    <TrendingUp className="size-4 text-[--body-text-color]"/>
                    <Text size="sm" className="my-0">32%</Text>
                </div>
                <Text size="sm" className="my-0">Than last month</Text>
            </div>
        </Card>

        <Card variant="mixed">
            <Caption as="span">New Customers</Caption>
            <Title className="mt-2" as="span">226.708</Title>

            <div className="mt-6 flex gap-3 items-center">
                <div className="flex items-center gap-1.5 [--body-text-color:theme(colors.danger.600)] dark:[--body-text-color:theme(colors.danger.400)]">
                    <TrendingDown className="size-4 text-[--body-text-color]"/>
                    <Text size="sm" className="my-0">15%</Text>
                </div>
                <Text size="sm" className="my-0">Than last month</Text>
            </div>
        </Card>
    </div>
)

export const StackedCards = () => {
    return (
        <Card variant="outlined" className="max-w-xl w-full">
            <Title as="h2" size="lg" weight="medium" className="mb-1">Overview</Title>
            <Text className="my-0" size="sm">Visualize your main activities data</Text>

            <div className="mt-6 grid sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 sm:divide-x">
                <div>
                    <Caption as="span">New Orders</Caption>
                    
                    <div className="mt-2 flex gap-3 justify-between items-center">
                        <Title as="span">
                            {data[3].Primary * 230}
                        </Title>
                        <div className="flex items-center gap-1.5 [--body-text-color:theme(colors.success.600)] dark:[--body-text-color:theme(colors.success.400)]">
                            <TrendingUp className="size-4 text-[--body-text-color]"/>
                            <Text size="sm" className="my-0">32%</Text>
                        </div>
                    </div>
                </div>
                <div className="pt-6 sm:pt-0 sm:pl-6">
                    <Caption as="span">New Customers</Caption>
                    
                    <div className="mt-2 flex gap-3 justify-between items-center">
                        <Title as="span">
                            {data[3].Accent * 100}
                        </Title>
                        <div className="flex items-center gap-1.5 [--body-text-color:theme(colors.danger.600)] dark:[--body-text-color:theme(colors.danger.400)]">
                            <TrendingDown className="size-4 text-[--body-text-color]"/>
                            <Text size="sm" className="my-0">15%</Text>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

type Fill = "Primary" | "Secondary" | "Accent" | "Gray" | "Neutral"
type Intent = "primary" | "secondary" | "accent" | "gray" | "neutral"

export const GradientAreaChart = ({intent, dataKey}:{intent:Intent, dataKey:Fill}) => {
    return (
        <div className="-mb-[--card-padding] -mx-1">
            <div className="h-24 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <LinearGradient id="Gray" intent="gray" />
                            <LinearGradient id="Primary" intent="primary" />
                            <LinearGradient id="Accent" intent="accent" />
                        </defs>
                        <Area
                            className={area({intent: intent })}
                            fill={`url(#${dataKey}`}
                            stroke="currentColor"
                            dataKey={dataKey}
                            type="monotone"
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
        </div>
    )
}

export const WithCharts = () => {
    return (
        <div className="grid sm:grid-cols-2 gap-3 sm:max-w-xl w-full">
            <Card variant="outlined">
                <Caption as="span">New Orders</Caption>
                <Title className="mt-2 flex items-center gap-3" as="span">
                    {data[3].Primary * 230}
                    <Badge intent="success" variant="soft" size="xs" className="h-fit flex gap-1.5 items-center">
                        <TrendingUp className="size-3.5" />
                        36%
                    </Badge>
                </Title>

                <GradientAreaChart intent="primary" dataKey="Primary" />
            </Card>

            <Card variant="outlined">
                <Caption as="span">New Customers</Caption>
                <Title className="mt-2 flex items-center gap-3" as="span">
                    {data[3].Accent * 100}
                    <Badge intent="danger" variant="soft" size="xs" className="h-fit flex gap-1.5 items-center">
                        <TrendingDown className="size-3.5" />
                        13%
                    </Badge>
                </Title>

                <GradientAreaChart intent="accent" dataKey="Accent" />
            </Card>
        </div>
    )
}

const stackedCode = `import Card from "@tailus-ui/Card"
import { Caption, Text, Title } from "@tailus-ui/typography"
import { TrendingDown, TrendingUp } from "lucide-react"

export const StackedCards = () => (
    <Card variant="outlined">
        <Title as="h2" size="lg" weight="medium" className="mb-1">Overview</Title>
        <Text size="sm">Visualize your main activities data</Text>

        <div className="mt-6 grid sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 sm:divide-x">
            <div>
                <Caption as="span">New Orders</Caption>
                
                <div className="mt-2 flex gap-3 justify-between items-center">
                    <Title as="span">639400</Title>
                    <div className="flex items-center gap-1.5 [--body-text-color:theme(colors.success.600)] dark:[--body-text-color:theme(colors.success.400)]">
                        <TrendingUp className="size-4 text-[--body-text-color]"/>
                        <Text size="sm">32%</Text>
                    </div>
                </div>
            </div>
            <div className="pt-6 sm:pt-0 sm:pl-6">
                <Caption as="span">New Customers</Caption>
                
                <div className="mt-2 flex gap-3 justify-between items-center">
                    <Title as="span">569400</Title>
                    <div className="flex items-center gap-1.5 [--body-text-color:theme(colors.danger.600)] dark:[--body-text-color:theme(colors.danger.400)]">
                        <TrendingDown className="size-4 text-[--body-text-color]"/>
                        <Text size="sm">15%</Text>
                    </div>
                </div>
            </div>
        </div>
    </Card>
)`

const overviewCode = `import Card from "@tailus-ui/Card"
import { Caption, Text, Title } from "@tailus-ui/typography"
import { TrendingDown, TrendingUp } from "lucide-react"

export const OverviewCards = () => (
    <div className="grid sm:grid-cols-2 gap-3 max-w-xl w-full">
        <Card variant="mixed">
            <Caption as="span">New Orders</Caption>
            <Title className="mt-2" as="span">326. 708</Title>

            <div className="mt-6 flex gap-3 items-center">
                <div className="flex items-center gap-1.5 [--body-text-color:theme(colors.success.600)] dark:[--body-text-color:theme(colors.success.400)]">
                    <TrendingUp className="size-4 text-[--body-text-color]"/>
                    <Text size="sm">32%</Text>
                </div>
                <Text size="sm">Than last month</Text>
            </div>
        </Card>

        <Card variant="mixed">
            <Caption as="span">New Customers</Caption>
            <Title className="mt-2" as="span">226.708</Title>

            <div className="mt-6 flex gap-3 items-center">
                <div className="flex items-center gap-1.5 [--body-text-color:theme(colors.danger.600)] dark:[--body-text-color:theme(colors.danger.400)]">
                    <TrendingDown className="size-4 text-[--body-text-color]"/>
                    <Text size="sm">15%</Text>
                </div>
                <Text size="sm">Than last month</Text>
            </div>
        </Card>
    </div>
)`

const withChartsCode = `import Card from "@tailus-ui/Card"
import { Caption, Text, Title } from "@tailus-ui/typography"
import { TrendingDown, TrendingUp } from "lucide-react"
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import { area } from "@tailus/themer";
import { Badge } from "@tailus-ui/Badge";
import { LinearGradient } from '@tailus-ui/visualizations';

type Fill = "Primary" | "Secondary" | "Accent" | "Gray" | "Neutral"
type Intent = "primary" | "secondary" | "accent" | "gray" | "neutral"

const GradientAreaChart = ({intent, dataKey}:{intent:Intent, dataKey:Fill}) => {
    return (
        <div className="-mb-[--card-padding] -mx-1">
            <div className="h-24 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <LinearGradient id="Gray" intent="gray" />
                            <LinearGradient id="Primary" intent="primary" />
                            <LinearGradient id="Accent" intent="accent" />
                        </defs>
                        <Area
                            className={area({intent: intent })}
                            fill={\`url(#\${dataKey}\`}
                            stroke="currentColor"
                            dataKey={dataKey}
                            type="monotone"
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
        </div>
    )
}

export const WithCharts = () => (
    <div className="grid sm:grid-cols-2 gap-3 sm:max-w-xl w-full">
        <Card variant="outlined">
            <Caption as="span">New Orders</Caption>
            <Title className="mt-2 flex items-center gap-3" as="span">
                639400
                <Badge intent="success" variant="soft" size="xs" className="h-fit flex gap-1.5 items-center">
                    <TrendingUp className="size-3.5" />
                    36%
                </Badge>
            </Title>

            <GradientAreaChart intent="primary" dataKey="Primary" />
        </Card>

        <Card variant="outlined">
            <Caption as="span">New Customers</Caption>
            <Title className="mt-2 flex items-center gap-3" as="span">
                478000 
                <Badge intent="danger" variant="soft" size="xs" className="h-fit flex gap-1.5 items-center">
                    <TrendingDown className="size-3.5" />
                    13%
                </Badge>
            </Title>

            <GradientAreaChart intent="accent" dataKey="Accent" />
        </Card>
    </div>
)`

export const stackedCardsCode = [{
    code: stackedCode,
    lang : "tsx"
}]

export const overviewCardsCode = [{
    code: overviewCode,
    lang : "tsx"
}]

export const withChartsCardsCode = [{
    code: withChartsCode,
    lang : "tsx"
}]