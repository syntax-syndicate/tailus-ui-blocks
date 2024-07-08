import { StackedCards } from './content/Overview';
import Orders from '../OrdersTable';
import { TwoAreasChart } from './content/AreaCharts';
import { SimpleBarChart } from './content/BarChart';
import { Traffic } from './content/Traffic';
import { StackedAreaChart } from './content/StackedAreas';

export const AppContent = () => (
    <div className="space-y-6">
        <StackedCards />
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <TwoAreasChart />
            <SimpleBarChart />
            <Traffic />
            <StackedAreaChart />
        </div>
        <Orders />
    </div>
);
