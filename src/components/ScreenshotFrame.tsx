export default function ScreenshotFrame({title, previewLink, imageLink}:{title: string, previewLink: string, imageLink: string}) {
    return (
        <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 shadow-xl shadow-gray-950/5 screenshot origin-bottom [transform:perspective(1000px)rotateX(-12deg)] opacity-30 transition-[transform,opacity] duration-1000">
            <div className="flex items-center justify-between border-b border-gray-950/5 px-4 sm:px-8 py-2">
                <div className="flex gap-2">
                    <div className="size-2 rounded-full bg-[#f87171]"></div>
                    <div className="size-2 rounded-full bg-[#fbbf24]"></div>
                    <div className="size-2 rounded-full bg-[#a3e635]"></div>
                </div>
                <div className="hidden sm:flex h-6 w-1/3 items-center justify-center gap-1 rounded-md bg-gray-100 dark:bg-gray-950">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                    </svg>
                    <span className="text-xs tracking-wide text-gray-500">{title}</span>
                </div>
                <a href={previewLink} className="group -mr-3 sm:-mr-7 -my-1 sm:-my-2 flex size-8 rounded-xl duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <span className="sr-only">Preview the template</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-auto flex size-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </a>
            </div>
            <img className="w-full" loading="lazy" src={imageLink} alt={title} width={600} height={600}/>
        </div>
    )
}
