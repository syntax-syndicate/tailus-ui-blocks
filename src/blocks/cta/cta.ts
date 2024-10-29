import type { Code } from "src/types";

const htmlCode = `<section class="bg-gradient-to-b py-32 dark:from-primary-950">
    <div class="mx-auto max-w-5xl px-6">
        <div class="text-center">
            <h2 class="text-title text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
            <p class="text-body mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

            <div class="mt-12 flex flex-wrap justify-center gap-4">
                <a href="/" class="btn variant-primary sz-lg">
                    <span>Get Started</span>
                </a>
                <a href="/" class="btn variant-outlined sz-lg">
                    <span>Book Demo</span>
                </a>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `import Link from 'next/link';

export default function CallToAction(){
    return (
        <section class="bg-gradient-to-b py-32 dark:from-primary-950">
            <div class="mx-auto max-w-5xl px-6">
                <div class="text-center">
                    <h2 class="text-title text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
                    <p class="text-body mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

                    <div class="mt-12 flex flex-wrap justify-center gap-4">
                        <Link href="/" class="btn variant-primary sz-lg">
                            <span>Get Started</span>
                        </Link>
                        <Link href="/" class="btn variant-outlined sz-lg">
                            <span>Book Demo</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = ``

export const ctaCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}