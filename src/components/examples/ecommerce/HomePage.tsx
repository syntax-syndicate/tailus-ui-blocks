import { Toaster } from 'sonner';
import type { BlockPreviewProps } from '@components/BlockPreview';
import { ProductCard } from './ProductCard';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { products } from './products';

export function HomePage() {
    return (
        <body className="bg-white dark:bg-gray-950">
            <SiteHeader />

            <Toaster position="bottom-left" />

            <main>
                <section className="pb-40 pt-24 lg:pt-32">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {products.map((product, index) => (
                                <ProductCard {...product} key={index} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </body>
    );
}

export const storePreview: BlockPreviewProps = {
    id: 'storepage1',
    title: 'Store home',
    category: 'ECommerce',
    description: 'Home page featuring products',
    src: '/examples/ecommerce/store',
    downloadLink: '/tailus-ui-react-store.zip',
    codesandboxLink:
        'https://codesandbox.io/p/devbox/tailus-ui-react-store-v664mc?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cly1fko6o00083b6k1xrixlqt%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cly1fko6o00023b6kqaq7ndzw%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cly1fko6o00063b6k7jdubwhs%2522%257D%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cly1fko6o00073b6kf4dchy22%2522%257D%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cly1fko6o00023b6kqaq7ndzw%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cly1fko6n00013b6ktl42x5ul%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522cly1fko6o00023b6kqaq7ndzw%2522%252C%2522activeTabId%2522%253A%2522cly1fko6n00013b6ktl42x5ul%2522%257D%252C%2522cly1fko6o00073b6kf4dchy22%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522cly1fko6o00073b6kf4dchy22%2522%257D%252C%2522cly1fko6o00063b6k7jdubwhs%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cly1fko6o00033b6kcmibv7i1%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%252C%257B%2522id%2522%253A%2522cly1fko6o00043b6k1qi57yuo%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522cly13yp29002td8jj8bfk51xa%2522%257D%252C%257B%2522id%2522%253A%2522cly1fko6o00053b6k7ba7ifd8%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522cly15ak9x004jd8jjh4aw3tf2%2522%257D%255D%252C%2522id%2522%253A%2522cly1fko6o00063b6k7jdubwhs%2522%252C%2522activeTabId%2522%253A%2522cly1fko6o00033b6kcmibv7i1%2522%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D'
};
