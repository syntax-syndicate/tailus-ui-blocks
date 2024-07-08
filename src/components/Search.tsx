import { useEffect } from 'react';
import cn from "./../lib/utils"
import { useStore } from '@nanostores/react';
import { isOpen, setIsOpen } from '../store/search';

const Search = ({children}) => {
    const $isOpen = useStore(isOpen);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey && (event.key === 'k' ))) {
                setIsOpen()
            }
            if ($isOpen && event.key === 'Escape') {
                setIsOpen()
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [$isOpen]);

    useEffect(() => {
        if ($isOpen) {
            document.body.classList.add('overflow-hidden');
            document.querySelector("main")?.classList.remove('z-[1]');
        } else {
            document.body.classList.remove('overflow-hidden');
            document.querySelector("main")?.classList.add('z-[1]');
        }
    }, [$isOpen]);

    return (
        <>
            <div
                onClick={setIsOpen}
                className={cn("fixed invisible opacity-0 transition-all duration-300 inset-0 w-full h-full bg-white/75 dark:bg-[--overlay-bg] z-[100]", $isOpen && "block visible opacity-100")}
                aria-hidden="true"
            />
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Search"
                aria-description='Search the site'
                data-shade="glassy"
                className={cn("invisible overflow-hidden transition-[shadow,opacity,transform] translate-y-4 origin-bottom duration-300 scale-95 opacity-0 md:w-full md:max-w-2xl fixed inset-0 z-[101] min-h-0 h-min max-h-[40rem] mx-auto top-20 inset-x-4 md:inset-x-0 rounded-[--card-radius] fancy-border feedback-shadow feedback-bg dark:shadow-xl dark:shadow-gray-950/35 dark:bg-gray-800/75", $isOpen && "translate-y-0 scale-100 opacity-100 visible")}
            >
                {children}  
            </div>
        </>
    );
}

export default Search;