import type { Code } from "./../../../../types";

const htmlCode = `<div class="bg-primary-600">
    <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col justify-center">
                <h1 class="text-4xl font-bold text-white">Welcome to Tailwind CSS</h1>
                <p class="text-lg text-gray-200 mt-4">A utility-first CSS framework for rapidly building custom designs.</p>
                <button class="bg-white text-primary-600 font-semibold py-2 px-4 mt-8 rounded-md">Get Started</button>
            </div>
            <div class="flex justify-center">
                <img src="https://via.placeholder.com/500" alt="hero" class="w-full h-auto">
            </div>
        </div>
    </div>
</div>`

const astroCode = `---
import { Image } from "astro:assets"
---

<div class="bg-primary-600">
    <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col justify-center">
                <h1 class="text-4xl font-bold text-white">Welcome to Tailwind CSS</h1>
                <p class="text-lg text-gray-200 mt-4">A utility-first CSS framework for rapidly building custom designs.</p>
                <button class="bg-white text-primary-600 font-semibold py-2 px-4 mt-8 rounded-md">Get Started</button>
            </div>
            <div class="flex justify-center">
                <Image src="./../images/hero.png" alt="hero" class="w-full h-auto">
            </div>
        </div>
    </div>
</div>`

const nextjsCode = `import Image from 'next/image';

export default function Hero1() {
    return (
        <div className="bg-primary-600">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl font-bold text-white">Welcome to Tailwind CSS</h1>
                        <p className="text-lg text-gray-200 mt-4">A utility-first CSS framework for rapidly building custom designs.</p>
                        <button className="bg-white text-primary-600 font-semibold py-2 px-4 mt-8 rounded-md">Get Started</button>
                    </div>
                    <div className="flex justify-center">
                        <Image 
                            src="https://via.placeholder.com/500" 
                            alt="hero" 
                            width={500} 
                            height={500} 
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}`

const nuxtjsCode = `<template>
  <div class="bg-primary-600">
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col justify-center">
          <h1 class="text-4xl font-bold text-white">Welcome to Tailwind CSS</h1>
          <p class="text-lg text-gray-200 mt-4">A utility-first CSS framework for rapidly building custom designs.</p>
          <button class="bg-white text-primary-600 font-semibold py-2 px-4 mt-8 rounded-md">Get Started</button>
        </div>
        <div class="flex justify-center">
          <NuxtImage 
            src="https://via.placeholder.com/500" 
            alt="hero" 
            width="500" 
            height="500" 
            class="w-full h-auto" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero1',
}
</script>`

export const hero1Code: Code = {
    html: htmlCode,
    astro: astroCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}