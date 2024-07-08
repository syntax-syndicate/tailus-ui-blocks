import { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Tooltip, YAxis, XAxis, Line, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";
import Custom from "@components/examples/Tooltip";

export const CryptoLineChart = () => {
    const [bitcoinData, setBitcoinData] = useState([]);

    useEffect(() => {
        const endTimestamp = Date.now();
        const startTimestamp = endTimestamp - 6 * 30 * 24 * 60 * 60 * 1000;

        fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${startTimestamp / 1000}&to=${endTimestamp / 1000}`)
        .then(response => response.json())
        .then(data => {
            const prices = data.prices.map(price => ({
            date: new Date(price[0]).toISOString().slice(0, 10),
            price: price[1],
            }));
            setBitcoinData(prices);
        })
        .catch(error => console.error(error));
    }, []);

    return (
        <div className="h-56 sm:h-72 sm:max-w-xl w-full sm:-ml-6 -ml-4" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bitcoinData}>
                    <defs>
                        <linearGradient className='text-white dark:text-gray-900' id="dotFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="currentColor" stopOpacity={1} />
                            <stop offset="95%" stopColor="currentColor" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <YAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <XAxis
                        className="text-[--caption-text-color]"
                        dataKey="date"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        offset={20}
                        content={
                            <Custom payload={[]} active fancy label={""}/>
                        }
                    />

                    <CartesianGrid
                        className={cartesianGrid()}
                        vertical={false}
                        stroke="currentColor"
                    />

                    <Line
                        className={area({ intent: "secondary" })}
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        dataKey="price"
                        dot={false}
                        activeDot={
                            {
                                color: "var(--area-secondary-stroke)",
                                r: 2,
                                stroke: "currentColor"
                            }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export const cryptoLineChartCode = [{
    code: `import { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Tooltip, YAxis, XAxis, Line, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";
import { CustomTooltip } from "@tailus-ui/visualizations";

export const MyChart = () => {

    const [bitcoinData, setBitcoinData] = useState([]);

    useEffect(() => {
        const endTimestamp = Date.now();
        const startTimestamp = endTimestamp - 6 * 30 * 24 * 60 * 60 * 1000;

        fetch(\`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=\${startTimestamp / 1000}&to=\${endTimestamp / 1000}\`)
        .then(response => response.json())
        .then(data => {
            const prices = data.prices.map(price => ({
            date: new Date(price[0]).toISOString().slice(0, 10),
            price: price[1],
            }));
            setBitcoinData(prices);
        })
        .catch(error => console.error(error));
    }, []);
    
    return (
        <div className="h-56 sm:h-72 w-full sm:max-w-2xl sm:min-w-[36rem]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bitcoinData}>
                    <defs>
                        <linearGradient className='text-white dark:text-gray-900' id="dotFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="currentColor" stopOpacity={1} />
                            <stop offset="95%" stopColor="currentColor" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <YAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <XAxis
                        className="text-[--caption-text-color]"
                        dataKey="date"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        offset={20}
                        content={
                            <CustomTooltip payload={[]} active fancy label={""}/>
                        }
                    />
                    
                    <CartesianGrid
                        className={cartesianGrid()}
                        vertical={false}
                        stroke="currentColor"
                    />

                    <Line
                        className={area({ intent: "secondary" })}
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        dataKey="price"
                        dot={false}
                        activeDot={
                            {
                                color: "var(--area-secondary-stroke)",
                                r: 2,
                                stroke: "currentColor"
                            }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}`,
    lang : "tsx"
}]