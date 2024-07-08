import { SearchIcon } from './../utilities/icons';
import { setIsOpen, isOpen } from '@store/search';
import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { Kbd } from "@components/typography";

const SearchButton = () => {
    const $isOpen = useStore(isOpen);

    useEffect(() => {
        if ($isOpen) {
            setTimeout(() => {
                const searchInput = document.querySelector('#search')?.querySelector("input") as HTMLInputElement;
                searchInput && searchInput.focus();
            }, 50);
        }
    }, [$isOpen]);

    return (
        <button
            onClick={setIsOpen}
            className={`relative group gap-3 lg:border flex items-center justify-center lg:justify-between backdrop-blur-2xl bg-white lg:px-2 w-9 lg:w-fit h-9 rounded-[--btn-radius] dark:bg-transparent hover:brightness-105 lg:dark:bg-gray-900`}
            aria-label="open search"
        >
            <div className="flex items-center gap-1.5">
                <SearchIcon className="size-4 text-gray-600 dark:text-gray-400" />
                <span className="hidden text-sm lg:block text-gray-700 dark:text-gray-300">
                    Search...
                </span>
            </div>
            <div className='hidden h-7 -mr-px lg:block'>
                <Kbd>⌘K</Kbd>
            </div>
        </button>
    );
}

export default SearchButton;